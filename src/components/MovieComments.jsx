import React from "react";
import { Container, ListGroup, Alert, Badge } from "react-bootstrap"
import { Card, Col, Row, Spinner, Button } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs';
import './NavBar.css';

class MovieComments extends React.Component {
  state = {
    comments: null,
    id: this.props.id,
  }

  componentDidMount = async () => {
    this.fetchComment();
  }
  fetchComment = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.state.id,
        {
          headers: new Headers({
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI3OTg1Yzk4MzViMDAwMTc1ODUwNGUiLCJpYXQiOjE2MDU4Njc2MTIsImV4cCI6MTYwNzA3NzIxMn0.U6mxgBFpYT7skg3ZUkt222yuYfZdPD1e_0OV27UXk0c",
          }),
        });
      if (response.ok) {
        let fetchedcomments = await response.json()
        this.setState({
          comments: fetchedcomments
        })
      } else {
        console.log("error during fetch")
      }
    } catch (e) {
      console.log(e);
    }
  }
  onDelete = async (id) => {
    const url= "https://striveschool-api.herokuapp.com/api/comments/"
    console.log(id);
    const res = await fetch( url + id, {
      headers: new Headers({
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI3OTg1Yzk4MzViMDAwMTc1ODUwNGUiLCJpYXQiOjE2MDU4Njc2MTIsImV4cCI6MTYwNzA3NzIxMn0.U6mxgBFpYT7skg3ZUkt222yuYfZdPD1e_0OV27UXk0c",
      }),
      method: "DELETE",
    })
    if (res.ok) {
      console.log("deleted");
      this.fetchComment();
    }
  }


  render(props) {

    return (
      <Container>
        {this.state.comments ? (
          <ListGroup className="mt-5 mb-5">
            {this.state.comments.map((comment, index) => {
              let variant = "";
              switch (comment.rate) {
                case 1:
                  variant = "danger";
                  break;
                case 2:
                  variant = "warning";
                  break;
                case 3:
                  variant = "secondary";
                  break;
                default:
                  variant = "success";
                  break;
              }

              return (

                <ListGroup.Item key={`list-item-${index}`} className="list-item " style={{ display: "flex", justifyContent: "space-between" }}>
                  <div> {comment.author}: {comment.comment} {" "}
                    <Badge pill variant={variant} className="ml-3">
                      {comment.rate}
                    </Badge>
                  </div>
                  <Button variant="danger" className="delete ml-3" onClick={() => this.onDelete(comment._id)}><BsTrash /></Button>
                </ListGroup.Item>

              );
            })}
          </ListGroup>
        ) : (
              <Alert variant="danger" className="mt-5 ">
                No comments here
            </Alert>
          )}
      </Container>
    );
  }
}

export default MovieComments

import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import './SingleMovie.css';
import ModalForm from "./Modal";

class SingleProduct extends React.Component {
  render(props) {
    return (
      <Col lg={2} md={4} xs={12} className="m-0 p-0">
        <div className="wrapper">
          <Card.Img fluid variant="top" src={this.props.movie.image || this.props.movie.Poster} className="moviePoster" onClick={() =>
             this.props.props.history.push('/details/' + this.props.movie.imdbID)} />
          <p style={{ color: "#fff" }} className="title">{this.props.movie.title}</p>
        </div>
        <ModalForm
          btn={"add review"}
          method={"POST"}
          data={this.props.movie.imdbID}
          refetchData={() => this.props.refetchData()}
        />
      </Col>
    );
  }
}
export default SingleProduct;
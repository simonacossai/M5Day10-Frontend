import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import CommentForm from "./message"
import './NavBar.css';

class ModalForm extends React.Component {
  state = {
    show: false,
    movies: this.props.data ? this.props.data : {},
  };

  onChangeHandler = (e) => {
    this.setState({
      movies: {
        ...this.state.movies,
        [e.target.id]: e.target.value,
      },
    });
  };

  handleSubmit = async () => {
    const url =
      this.props.method === "PUT"
        ? "https://striveschool-api.herokuapp.com/api/comment" +
          this.props.data.imdbID
        : "https://striveschool-api.herokuapp.com/api/comment";
    try {
      const response = await fetch(url, {
        method: this.props.method,
        body: JSON.stringify(this.state.movies),
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI3OTg1Yzk4MzViMDAwMTc1ODUwNGUiLCJpYXQiOjE2MDU4Njc2MTIsImV4cCI6MTYwNzA3NzIxMn0.U6mxgBFpYT7skg3ZUkt222yuYfZdPD1e_0OV27UXk0c",
        }),
      });
      if (response.ok) {
        alert("ok");
        this.props.refetchData();
        this.setState({ show: false });
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <>
        <Button variant="success" onClick={() => this.setState({ show: true })} className="button-modal">
          +
        </Button>

        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          className="mt-5"
          style={{zIndex:"50000"}}
        >
          <Modal.Header closeButton
          >
            <Modal.Title>{this.state.movies}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CommentForm id={this.state.movies}/>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default ModalForm;
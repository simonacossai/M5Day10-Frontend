import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import video from '../data/Dark.mp4'
import './Jumbotron.css';
import {BsPlayFill} from 'react-icons/bs';
import {AiFillInfoCircle} from 'react-icons/ai';

class JumbotronComponent extends React.Component {
  render(props) {
    return (
      <Jumbotron fluid style={{position: "relative" }} className="p-0 mb-0 jumbotron">
      <div
        className="overlay"
        style={{
          width: "100%",
          zIndex: "0",
          overflow: "hidden",
        }}
      >
        <video src={video} autoPlay muted loop style={{ position: "relative", width: "100%" }}></video>
      </div>

      <div
        className="pl-5 text-div"
    
      >
      <h1 className="movie-title">Dark</h1>
      <div className="d-flex">
        <Button className="watch mr-3"><BsPlayFill className="mr-1 play" />Watch</Button>
        <Button className="more"><AiFillInfoCircle className="mr-1 info"/>More info</Button>

      </div>
      </div>
    </Jumbotron>
      
    );
  }
}

export default JumbotronComponent;
import React, { Component } from 'react'
import {Row, Container, Col, Card} from 'react-bootstrap';
import SingleMovie from './SingleMovie';
export default class MovieRows extends Component {
state={
  data:[]
}
    fetchMoviesByCategory = async () => {
        try {
          const url = "http://localhost:3001/movies?category="+ this.props.category
          const response = await fetch( url,
            {
              method: "GET",
            }
          );
          if (response.ok) {
            const data = await response.json();
            this.setState({data: data.splice(0,6)})
          }
        } catch (e) {
          console.log(e);
        }
      };
    componentDidMount(){
        this.fetchMoviesByCategory()
    }
    render() {
        return (
            <Container fluid>
               <h3 className="text-white text-left m-0 ml-2 p-0">{this.props.title}</h3> 
               <Row className="mt-3 mb-5 m-0 p-0">
       {this.state.data && this.state.data.map((m, index) => (
        <SingleMovie movie={m} key={index} props={this.props} />
        ))}
               </Row>
            </Container>
        )
    }
}


import React from 'react';
import { Container, Row, FormControl } from "react-bootstrap";
import SingleMovie from './SingleMovie';
import './MovieList.css';



class MovieList extends React.Component {
  state = {
    movies: [],
    filtered: [],
    array: [],
    input: ""
  }

  fetchMovies = async (category) => {
    try {
      const url = "https://netflix-backend-m5.herokuapp.com/movies"
      const response = await fetch( url,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        this.state.array.push(...data);
        this.setState({ movies: this.state.array, filtered: this.state.array });
      }
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount = async () => {
    
        this.fetchMovies()

  };
  
  fetchMoviesByCategory = async (category) => {
    try {
      const url = "https://netflix-backend-m5.herokuapp.com/movies?category="+ category
      const response = await fetch( url,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        this.setState({array: data})
        this.setState({ movies: this.state.array, filtered: this.state.array });
      }
    } catch (e) {
      console.log(e);
    }
  };

  FindMovie = (query) => {
    const clone = { ...this.state.array };
    this.setState({ input: query })
    if (this.state.input.length > 1) {
      let filteredMovies = this.state.movies.filter((movie) =>
        movie.title.toLowerCase().includes(this.state.input.toLowerCase())
      );
      this.setState({ filtered: filteredMovies });
    } else {
      this.setState({ filtered: this.state.array });
    }
  };
  selectCategory=(e)=>{
    console.log(e.currentTarget.value)
    const category = e.currentTarget.value
    if(category==="all"){
      this.fetchMovies()
    }else{
    this.fetchMoviesByCategory(category)
    }
  }

  render(props) {
    return (
      <div>
        <Container fluid className=" justify-content-center mt-0 mx-0 mb-5" style={{ overflowX: "hidden", backgroundColor: "#1f1e1e",position: "relative", color: "#ffff" }}>
          <div className="d-flex align-items-center justify-content-start m-0 mt-5">
            <h2>{this.props.title}</h2>
            <select onChange={(e)=>this.selectCategory(e)}>
              <option value="all">genres</option>
              <option value="romance">romance</option>
              <option value="horror">horror</option>
              <option value="fantasy">fantasy</option>
            </select>
            <FormControl
              className="ml-4"
              placeholder="Search movies"
              aria-label="Search"
              style={{ width: "200px" }}
              value={this.state.input}

              onChange={(e) => this.FindMovie(e.target.value)}
            />
          </div>
          <Row className="mt-3 mb-5">
            {this.state.filtered.map((m, index) => (

              <SingleMovie movie={m} key={index} props={this.props} />
            ))}
          </Row>
        </Container>

      </div>
    );
  }
}

export default MovieList;
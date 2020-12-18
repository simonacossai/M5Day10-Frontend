import React, { Component } from 'react'
import Jumbotron from './Jumbotron';
import MovieRows from './MovieRows';
export default class Categories extends Component {
    render() {
        return (
            <div>
               <Jumbotron />
               <MovieRows title="Horror" category="horror" props={this.props}/>
               <MovieRows title="Fantasy" category="fantasy" props={this.props}/>
               <MovieRows title="Romance" category="romance" props={this.props}/>
            </div>
        )
    }
}

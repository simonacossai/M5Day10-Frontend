import React from "react"
import "./NavBar.css"
import logo from '../data/logo.png';
import profilepic from '../data/profile_picture.png';
import { Navbar, Form, Nav, Container } from "react-bootstrap"
import { Link, withRouter } from 'react-router-dom'
import { BsFillBellFill } from 'react-icons/bs';


class NavBar extends React.Component {
  state={
    navBackground: "transparent"
  }
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY > 100 ? "#1f1e1e" : "transparent";
      this.setState({ navBackground: backgroundcolor });
    });
  }

  render(props) {

  return (
    <Navbar className="navbar py-0 m-0 px-1 fixed-top" style={{backgroundColor: this.state.navBackground,width:"100%", position:"fixed", top: "0", zIndex:"99999"}}>
      <Link to="/">
        <Navbar.Brand> <img style={{ height: "8vh" }} src={logo} />
        </Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link to="/">
          <a className="nav-link" to="/" style={{ color: "white" }}> Tv Shows</a>
        </Link>
        <Nav.Link className="navLink" href="#movies">Movies</Nav.Link>
        <Nav.Link className="navLink" href="#recentlyAdded">Recently Added</Nav.Link>
        <Nav.Link className="navLink" href="#myList">My List</Nav.Link>
      </Nav>
     
      <Navbar.Brand>
        <BsFillBellFill style={{ color: "white" }} />
        <img style={{ height: "30px" }} src={profilepic} className="ml-3 mr-2" />
      </Navbar.Brand>
    </Navbar>
  )
  }
}

export default withRouter(NavBar); // will give the component exported EXTRA PROPS: history, location, match






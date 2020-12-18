import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import MyFooter from "./components/Footer";
import Navbar from './components/Navbar';
import Details from './components/Details';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import JumbotronComponent from './components/Jumbotron';
import Categories from './components/Categories';
function App() {
  return (
   <>
    <Router>
   <Navbar />
   <Route
    path="/"
    exact
    render={(
      props 
    ) => <JumbotronComponent {...props} />} 
  />
   <Route
    path="/"
    exact
    render={(
      props 
    ) => <Home title="Tv shows" {...props} />} 
  />
   <Route
    path="/details/:id"
    exact
    render={(
      props 
    ) => <Details title="Details" {...props} />} 
  />
     <Route
    path="/categories"
    exact
    render={(
      props 
    ) => <Categories {...props} />} 
  />
   <MyFooter/>
   </Router>
   </>

  )}

  export default App;
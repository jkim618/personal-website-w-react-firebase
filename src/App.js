import React from 'react';
import Board from './messageBoard'
import Navbar from './Navbar'
import Home from './Home'
import Aboutme from './Aboutme'
import { Route, BrowserRouter as Router } from "react-router-dom";
import Experience from './Experience'

class App extends React.Component{
  render(){
    return(
      <div className="App">
        {/*<Navbar/>
        <Home/>*/}
        <Router>
          <Route exact path="/" component={Home} />
          <Route exect path="/aboutme" component={Aboutme}/>
          <Route exect path="/experience" component={Experience}/>
          <Route exact path="/board" component={Board} />
        </Router>
      </div>
    )
  }
}
export default App;

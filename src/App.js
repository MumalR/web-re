import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./Comp/Navbar";
import "./App.css"
import Home from "./Comp/Pages/Home.js";
import Makeup from "./Comp/Pages/Makeup.js";
import Music from "./Comp/Pages/Music.js";
import SignUp from "./Comp/Pages/SignUp.js";

function App () {
  return (
      <>
        <Router>
          <Navbar />
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/makeup'  component={ Makeup }/>
              <Route path='/music'  component={Music}/>
              <Route path='/sign-up'  component={SignUp}/>
              <Home/>
            </Switch>
        </Router>
        
      </>
  );
};

export default App;
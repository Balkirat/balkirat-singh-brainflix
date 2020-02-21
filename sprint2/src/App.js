import React, { Component } from "react";
import "./styles.scss";
import Header from "./components/Header/header";
import HomePage from "./Pages/HomePage";
import Upload from "./Pages/Upload";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
   
    return (
      <>
        
        <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/upload" component={Upload} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;

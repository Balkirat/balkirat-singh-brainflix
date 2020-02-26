import React, { Component } from "react";
import "./styles.scss";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage/HomePage";
import Upload from "./Pages/Upload/Upload";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const API_URL = `https://project-2-api.herokuapp.com`;

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/upload" component={Upload} />
            <Route path="/videos/:id" component={HomePage}/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
export { API_URL };

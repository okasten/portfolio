import React, { Component } from "react";
import { withRouter, Route, Switch, HashRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;

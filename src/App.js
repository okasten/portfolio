import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Scheduler from "./components/Scheduler";
import Pong from "./components/Pong";
import MonologueJournal from "./components/MonologueJournal";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/advscheduler" component={Scheduler} />
          <Route path="/pong" component={Pong} />
          <Route path="/monologuejournal" component={MonologueJournal} />
          <Route path="/" exact component={HomePage} />
        </Switch>
        <BottomNav />
      </div>
    );
  }
}

export default App;

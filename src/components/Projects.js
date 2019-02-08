import React, { Component } from "react";
import { Link } from "react-router-dom";
import scheduler from "../Screenshots/schedulerScreenShot.png";
import monologue from "../Screenshots/monologueScreenShot.png";
import pong from "../Screenshots/pongScreenShot.png";

export default class Projects extends Component {
  render() {
    return (
      <div className="pageHeaders">
        <h1>My Projects</h1>
        <div className="projects">
          <div className="project">
            <Link to="/advscheduler">
              <label>Adv.Scheduler</label>
            </Link>
            <img
              className="screenshots"
              src={scheduler}
              alt="Adv. Scheduler screenshot"
            />
          </div>
          <div className="project">
            <Link to="monologuejournal">
              <label>The Actor's Monologue Journal</label>
            </Link>
            <img
              className="screenshots"
              src={monologue}
              alt="The Actor's Monologue Journal screenshot"
            />
          </div>
          <div className="project">
            <Link to="/pong">
              <label>Pong</label>
            </Link>
            <br />
            <img className="screenshots" src={pong} alt="Pong screenshot" />
          </div>
        </div>
      </div>
    );
  }
}

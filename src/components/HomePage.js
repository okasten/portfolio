import React, { Component } from "react";
import QuickAboutMe from "./QuickAboutMe";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <div>
          <img
            className="homePageImg"
            alt="background"
            src="https://farm7.staticflickr.com/6061/6044505487_41be6f9241_b.jpg"
          />
          <div className="homePageText">
            <h1>Olivia Kasten</h1>
            <h2>Full Stack Web Developer</h2>
          </div>
        </div>
        <QuickAboutMe />
      </div>
    );
  }
}

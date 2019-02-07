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
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
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

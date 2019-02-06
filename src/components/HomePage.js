import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <img
          className="homePageImg"
          alt="background"
          src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <h1>Olivia Kasten</h1>
        <br />
        <h2>Full Stack Web Developer</h2>
      </div>
    );
  }
}

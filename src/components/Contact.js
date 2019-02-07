import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="pageHeaders">
        <h1>Reach Out</h1>
        <br />
        <div className="contactInfo contactMe">
          <h3>odkasten@gmail.com</h3>
          <h3>419-706-8639</h3>
          <p>
            <a href="https://www.instagram.com/okasten/">
              <img
                className="socialMedia"
                src="https://image.flaticon.com/icons/svg/87/87390.svg"
                alt="instagram"
              />
            </a>
            <a href="https://github.com/okasten">
              <img
                className="socialMedia"
                src="https://image.flaticon.com/icons/svg/25/25231.svg"
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/oliviadkasten/">
              <img
                className="socialMedia"
                src="https://image.flaticon.com/icons/svg/1051/1051333.svg"
                alt="linkedIn"
              />
            </a>
            <a href="https://medium.com/@odkasten">
              <img
                className="socialMedia"
                src="https://image.flaticon.com/icons/svg/81/81661.svg"
                alt="medium"
              />
            </a>
          </p>
        </div>
      </div>
    );
  }
}

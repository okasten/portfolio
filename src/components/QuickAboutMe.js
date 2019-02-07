import React, { Component } from "react";

export default class QuickAboutMe extends Component {
  render() {
    return (
      <div className="quickAboutMe">
        <img
          className="headshot"
          src="https://avatars2.githubusercontent.com/u/42680881?s=460&v=4"
          alt="headshot"
        />
        <p className="quickAboutMeText">
          Hi there, I'm Olivia! I'm an actor and professional tennis coach
          turned full stack web developer with a passion for JavaScript
          frameworks. I circled back to coding after a long detour, bringing
          with me a love of collaboration, creative problem solving, and a
          detail-oriented approach to projects. I am excited to join a
          supportive team of fellow developers that prioritizes creativity and a
          “try everything at least once” attitude. When I'm not coding I enjoy
          acting, playwriting, petting good pups, and participating as a Blonde
          for TackleALZ. Please feel free to reach out!
          <br />
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
    );
  }
}

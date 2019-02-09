import React, { Component } from "react";

export default class Pong extends Component {
  render() {
    return (
      <div>
        <div className="pageHeaders">
          <h1 className="pong">Pong</h1>
          <div className="projectPage">
            <iframe
              width="560"
              height="315"
              title="Pong Demo Video"
              src="https://www.youtube.com/embed/UGg9M0K5Yvk"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <p className="description">
              Climb the leaderboards in a recreation of the classic Atari Pong
              for one player or two player
              <ul>
                <li>Play against the computer or a friend</li>
                <li>Keep track of your game stats</li>
                <li>Climb the leaderboard</li>
              </ul>
              <a href="https://github.com/okasten/Pong">Github</a>
            </p>
          </div>
        </div>
        <p className="idea">
          After learning JavaScript, I wanted to create something that was fun
          and highly interactive. Growing up, I remember playing Pong for hours
          on our desktop computer, and I thought it would be a nice challenge to
          recreate that. This was probably one of the most frustratingly fun
          projects I've worked on thus far!
        </p>
        <div className="techStackPong">
          <h2>Tech Stack</h2>
          <p>Vanilla JavaScript | Ruby on Rails | p5 | Bootstrap</p>
        </div>
      </div>
    );
  }
}

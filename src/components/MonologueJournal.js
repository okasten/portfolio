import React, { Component } from "react";

export default class MonologueJournal extends Component {
  render() {
    return (
      <div>
        <div className="pageHeaders">
          <h1>The Actor's Monologue Journal</h1>
          <div className="projectPage">
            <iframe
              width="560"
              height="315"
              title="Monologue Journal Demo Video"
              src="https://www.youtube.com/embed/G3HzQO94czI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <p className="descriptionMonologue">
              A single place for actors to keep their monologues
              <ul>
                <li>Keep track of your monologues</li>
                <li>Time and log the length of your monologue</li>
                <li>Add/edit notes on individual monologues</li>
                <li>Share monologues with other users</li>
              </ul>
              Github:{" "}
              <a href="https://github.com/okasten/monologue_frontend">
                Frontend
              </a>{" "}
              |{" "}
              <a href="https://github.com/okasten/monologue_backend">Backend</a>
            </p>
          </div>
        </div>
        <p className="idea">
          As an actor, I needed a convenient place to keep my monologues. I had
          a binder with printed out versions of my monologues, and a gigantic
          Word file that was a copy of my binder. When an audition would come
          up, I'd have to scroll through the never-ending Word file to find an
          appropriate monologue for that audition. I realized that I needed
          something where I could see all my monologues at once. I built this
          app with the needs of an actor in mind.
        </p>
        <div className="techStackPong">
          <h2>Tech Stack</h2>
          <p>React | JWT Authorization | Ruby on Rails | Bootstrap</p>
        </div>
      </div>
    );
  }
}

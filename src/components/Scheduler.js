import React, { Component } from "react";

export default class Scheduler extends Component {
  render() {
    return (
      <div>
        <div className="pageHeaders">
          <h1>Adv.Scheduler</h1>
          <div className="projectPage">
            <iframe
              width="560"
              height="315"
              title="Adv.Scheduler Demo Video"
              src="https://www.youtube.com/embed/xJz3zO7uA54"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <p className="description">
              An app for tennis coaches and players to keep track of and
              schedule their lessons.
              <ul>
                <li>Book lessons</li>
                <li>Add/edit notes to your lessons</li>
                <li>Direct message with your coach/student</li>
                <li>Set new short-term and long-term goals</li>
              </ul>
              Github:{" "}
              <a href="https://github.com/okasten/tennis_frontend">Frontend</a>{" "}
              | <a href="https://github.com/okasten/tennis_backend">Backend</a>
            </p>
          </div>
        </div>
        <p className="idea">
          As a tennis coach, I would have so many students every week that it
          was difficult for me to remember exactly what we worked on the week
          before. I thought that if there was a quick way to write up some notes
          about each lesson right after it happened, and then be able to review
          those notes prior to the next lesson, it would make my job as a coach
          infinitely easier. It would also help create that personal connection
          with my clients, something that was always incredibly important to me
          when I was learning tennis.
        </p>
        <div className="techStack">
          <h2>Tech Stack</h2>
          <p>
            React with Redux | JWT Authorization | Ruby on Rails | Bootstrap
          </p>
        </div>
      </div>
    );
  }
}

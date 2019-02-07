import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <div className="pageHeaders">
        <h1>About Me</h1>
        <div className="quickAboutMe">
          <img
            className="aboutMeImg"
            src="https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/cbbfcddd-83ce-4f2a-aafc-80c140d13d05-bWFpbi1uLW4tMC0wLTAtOTYwLTEyMDA%3D.jpg"
            alt="headshot about me"
          />
          <p className="aboutMeText">
            I graduated from Johns Hopkins University in 2016 with a degree in
            Psychology and a minor in Theater. I wasn't exactly sure what I
            wanted to do career-wise yet, so I decided on more education. Post
            graduation, I spent two semesters at the Eugene O'Neill Theater
            Center in Waterford, Connecticut where I studied acting and
            playwriting for 16 hours a day, 7 days a week. After making the move
            to New York City, I decided to coach tennis at a local club in
            Williamsburg. Although I love the theater and tennis, I found that I
            wasn't being completely fulfilled by them individually, nor did I
            have enough time and energy to do them fully. So I decided to make a
            career change. I rediscovered coding (I'd taken AP Computer Science
            in high school) after a long discussion with my older brother, and
            decided that if I can work on a team that is creating solutions that
            will make other people’s lives better or more enjoyable in some way,
            then I’m doing what I need to be doing and I’m a part of something
            that’s bigger than I am. After some research, I found Flatiron
            School -- a 15-week immersive coding bootcamp in Brooklyn, NY.
            Flatiron School was an amazing experience that grew my love for
            coding again, and left me ready to go out into the world and land a
            job as a full stack web developer. I will always be proud to say
            that I started my career when I decided attend Flatiron School.
          </p>
        </div>
      </div>
    );
  }
}

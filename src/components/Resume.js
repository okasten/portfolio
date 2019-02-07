import React, { Component } from "react";
import resume from "../Technical Resume - Kasten.pdf";

export default class Resume extends Component {
  render() {
    return (
      <div className="pageHeaders">
        <h1>Resume</h1>
        <object alt="resume" data={resume} width="800" height="575" />
      </div>
    );
  }
}

import React, { Component } from "react";
import resume from "../Technical Resume - Kasten.pdf";

export default class Resume extends Component {
  render() {
    return (
      <div className="pageHeaders">
        <h1>Resume</h1>
        <object data={resume} width="800" height="800" />
      </div>
    );
  }
}

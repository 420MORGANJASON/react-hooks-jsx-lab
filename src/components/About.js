import React from "react";
import { image1 } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>I made this</p>
    <img src={image1} alt="images" />
  </div>;
}

export default About;

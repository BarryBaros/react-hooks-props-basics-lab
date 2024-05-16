import React from "react";

function About(props) {

  if (!props.p) {
    return null;
  } else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.p}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <a href="#about">{props.github}</a>
        {props.linkedin}
      </div>
    );
  }
}


export default About;

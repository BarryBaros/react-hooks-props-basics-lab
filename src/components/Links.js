import React from "react";
import About from "./About";

function Links() {
    return (
      <div id="links">
        <About
          github="https://github.com/liza"
          linkedin="https://www.linkedin.com/in/liza/"
        />

        <h3>Links</h3>
        <a href="https://github.com/liza">Github</a>
        <a href="https://www.linkedin.com/in/liza/">LinkedIn</a>
      </div>
    );
}

export default Links;
import React from "react";
import { name1 } from "../data/data";
import { city1 } from "../data/data";


const divStyle = {
  color: 'firebrick',
};

function Home() {
  // update the JSX being returned!
  return <div id="home">
    <h1 style={divStyle}>
      {name1} is a Web Developer from {city1} 
    </h1>
  </div>;
};

export default Home;

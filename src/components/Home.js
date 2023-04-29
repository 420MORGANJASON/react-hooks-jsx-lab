import React from "react";
import { name1, city } from "../data/data";
const divStyle = {
  color: 'firebrick',
};
function Home() {
  // update the JSX being returned!
  return <div id="home">
    <h1 style={divStyle}>
      {name1} is a Web Developer from {city} 
    </h1>
  </div>;
}

export default Home;

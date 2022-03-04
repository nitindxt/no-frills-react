import React from "react";
import { render } from "react-dom";
import Pet from './Pet';


const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Sky",
      animal: "Bird",
      breed: "Budgie",
    }),
    React.createElement(Pet, {
      name: "Dude",
      animal: "Dog",
      breed: "Desi",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));

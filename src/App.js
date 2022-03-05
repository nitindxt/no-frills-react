import { render } from "react-dom";
import Pet from "./Pet";

/* const App = () => {
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
}; */

//rewrite App in jsx
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Dude" animal="Dog" breed="Desi"></Pet>
      <Pet name="Sky" animal="Bird" breed="Budgie"></Pet>
    </div>
  );
};

// render(React.createElement(App), document.getElementById("root")); in jsx but
//remember it afterwards converts to react.createElement only 👇🏻
render(<App></App>, document.getElementById("root"));

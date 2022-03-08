import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import { StrictMode } from "react";

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
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details></Details>}></Route>
          <Route path="/" element={<SearchParams></SearchParams>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Dude" animal="Dog" breed="Desi"></Pet>
      <Pet name="Sky" animal="Bird" breed="Budgie"></Pet> */}
    </StrictMode>
  );
};

// render(React.createElement(App), document.getElementById("root")); in jsx but
//remember it afterwards converts to react.createElement only 👇🏻
render(<App></App>, document.getElementById("root"));

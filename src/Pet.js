//import React from "react"; //in jsx it's imported by default

/* const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
}; */

//rewrite above code in jsx format (clean and renders as it reads) 👇🏻
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;

//Note: earlier it was opiniated to rename files contained jsx code to .jsx but Dan abbelmov (Core team member react) told
//you don't name it Pet.babbel.js i.e You don't include all build tools you are using in file name so why .jsx
// but ts will have to be named as .tsx as build tools won't do transformation otherwise
//import React from "react"; //in jsx it's imported by default

import { Link } from "react-router-dom";

/* const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
}; */

//rewrite above code in jsx format (clean and renders as it reads) 👇🏻
const Pet = ({ name, animal, breed, location, images, id }) => {
  let hero = "http://pet-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name}></img>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;

//Note: earlier it was opiniated to rename files contained jsx code to .jsx but Dan abbelmov (Core team member react) told
//you don't name it Pet.babbel.js i.e You don't include all build tools you are using in file name so why .jsx
// but ts will have to be named as .tsx as build tools won't do transformation otherwise

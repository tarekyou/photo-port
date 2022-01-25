import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from "../../utils/helpers";
// import photo from "../../assets/small/commercial/0.jpg";

function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;
  //   const currentCategory = {
  //     name: "commercial",
  //     description:
  //       "Photos of grocery stores, food trucks, and other commercial projects",
  //   };
  return (
    // <section>
    //   <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
    //   <p>{currentCategory.description}</p>
    //   {/* <div>
    //     <img src={photo} />
    //   </div> */}
    //   <div className="flex-row">
    //     <img
    //       src={photo}
    //       alt="Commercial Example"
    //       className="img-thumbnail mx-1"
    //     />
    //   </div>
    // </section>

    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}
export default Gallery;

import React from "react";
import Teaser from "../teaser";
import ExperienceFragment from "../experiencefragment/experiencefragment";
import RichText from "../richtext";
import AdventureGrid from "../adventuregrid/adventuregrid";
import ImageList from "../imagelist";


export const componentMapping = {
 ExperienceFragment,
  RichText,
  ImageList,
  Teaser,
  AdventureGrid
}

const ModelManager = ({ type, content }) => {
  console.log(type);
    const Component = componentMapping[type.replace("Model","")];
    if(typeof Component !== "undefined")
      return <Component content={content} />
    else
      return <p>Whoops!</p>
}


export default ModelManager;
import React from "react";
import Teaser from "../teaser";
import ExperienceFragment from "../experiencefragment/experiencefragment";
import RichText from "../richtext";
import AdventureGrid from "../adventuregrid/adventuregrid";
import ImageList from "../imagelist";
import Article from "../article/article";


export const componentMapping = {
 ExperienceFragment,
  RichText,
  ImageList,
  Teaser,
  AdventureGrid,
  Article
}

const ModelManager = ({ type, content, references }) => {
  console.log(type);
    const Component = componentMapping[type.replace("Model","")];
    if(typeof Component !== "undefined")
      return <Component content={content} references={references} />
    else
      return <p>Whoops!</p>
}


export default ModelManager;
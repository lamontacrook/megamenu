import React from "react";
import Teaser from "../teaser";
import ExperienceFragment from "../experiencefragment";
import RichText from "../richtext";
import AdventureGrid from "../adventuregrid";
import ImageList from "../imagelist";
import Article from "../article";
import AdventureDetail from "../adventuredetail";
import Contributors from "../contributors";

export const componentMapping = {
  ExperienceFragment,
  RichText,
  ImageList,
  Teaser,
  AdventureGrid,
  Article,
  AdventureDetail,
  Contributors
};

const ModelManager = ({ type, content, references }) => {
 console.log(type);
  const Component = componentMapping[type.replace("Model", "")];
  console.log(Component);
  if (typeof Component !== "undefined")
    return <Component content={content} references={references} />;
  else return <p>Whoops!</p>;
};

export default ModelManager;

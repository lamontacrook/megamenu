import React from "react";
import Teaser from "../teaser";
import ExperienceFragment from "../experiencefragment";
import RichText from "../richtext";
import ImageList from "../imagelist/imagelist";
import ErrorBoundary from "../ErrorBoundary";

export const componentMapping = {
 ExperienceFragment,
  RichText,
  ImageList,
  Teaser
}

const Entity = ({ type, content }) => {
    const Component = componentMapping[type.replace("Model","")];
    console.log(componentMapping);
    if(typeof Component !== "undefined")
      return <Component content={content} />
    else
      return <p>Whoops!</p>
}

export const MapTo = (modelName, componentName) => {
  componentMapping[modelName] = componentName;
}

export default Entity;
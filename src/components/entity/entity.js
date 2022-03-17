import React from "react";
import Navigation from "../navigation";
import Teaser from "../teaser";
import XF from "../experiencefragment";
import RichText from "../richtext";
import ImageList from "../imagelist/imagelist";

const Entity = ({ type, content }) => {
  if (type === "navigation")
    return <Navigation content={content} />;
  else if (type === "teaser") 
    return <Teaser content={content} />;
  else if (type === "experience fragment")
    return <XF content={content} />;
  else if (type === "rich text")
    return <RichText content={content} />
  else if (type === "image list")
    return <ImageList content={content} />
  else return <p>default</p>;
}

export default Entity;
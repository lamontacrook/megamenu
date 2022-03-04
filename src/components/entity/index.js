import React from "react";
import ErrorScreen from "../Error";
import Navigation from "../navigation";
import Teaser from "../teaser";
import XF from "../experiencefragment";
import RichText from "../richtext";
import ImageList from "../imagelist";

export default function Entity(props) {
  // console.log(props.type);
  if (props.type === "navigation")
    return <Navigation content={props.content} />;
  else if (props.type === "teaser") 
    return <Teaser content={props.content} />;
  else if (props.type === "experience fragment")
    return <XF content={props.content} />;
  else if (props.type === "rich text")
    return <RichText content={props.content} />
  else if (props.type === "image list")
    return <ImageList content={props.content} />
  else return <p>default</p>;
}

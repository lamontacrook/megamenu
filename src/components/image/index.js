import React from "react";
import Img from "@renditions/react-img";

const Image = (props) => {
  const renditions = [
      { name:"thumbnail", width: 319 }, 
      { name:"web", width: 1280 }
    ];

  const getSrc = (filename, rendition) => {
    const url = props.src._publishUrl.substr(props.src._publishUrl.lastIndexOf('\\') + 1).split('.');
    let ext = url.length > 1? url[url.length-1]:"jpeg";
    if(ext === "JPG") ext = "jpeg";
    return `${props.src._publishUrl}/_jcr_content/renditions/cq5dam.${rendition.name}.${rendition.width}.${rendition.width}.${ext}`;
  };

  return (
    <Img
      renditions={renditions}
      getSrc={getSrc.bind(null, "")}
      className={props.className}
    />
  );
}

export default Image;

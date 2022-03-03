import React from "react";
import Img from "@renditions/react-img";

const Image = (props) => {
  const renditions = [
      { width: 319 }, 
      { width: 1280 }
    ];
console.log(props);
  const getSrc = (filename, ext, rendition) => {
    return `${props.src._publishUrl}/_jcr_content/renditions/cq5dam.web.${rendition.width}.${rendition.width}.${ext}`;
  };

  return (
    <Img
      renditions={renditions}
      getSrc={getSrc.bind(null, "", "jpeg")}
      className={props.className}
    />
  );
}

export default Image;


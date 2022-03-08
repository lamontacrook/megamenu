import React from "react";

import "./index.css";
import Image from "../image";

export default function Teaser(props) {

  return (
    <div className={props.content.entityType}>
      <div className="floater">
        <div className="innerContent">
          {props.content.teaserPreTitle != null && (<div className="preTitle">{props.content.teaserPreTitle}</div>)}
          <h2>{props.content.teaserTitle}</h2>
          
          <p
            dangerouslySetInnerHTML={{
              __html: props.content.teaserDescription["html"],
            }}
          />

          {props.content.teaserCallToAction != null && (
            <a href="/" className="action-links">{props.content.teaserCallToAction}</a>
          )}
        </div>
      </div>
      <Image className="teaser-image" alt={props.content.teaserTitle} src={props.content.teaserImage} />
    </div>
  );
}

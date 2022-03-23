import React from "react";

import "./teaser.css";
import Image from "../image";


const Teaser = ({ content }) => {
  return (
    <div className={content.entityType}>
      <div className="floater">
        <div className="inner-content">
          {content.teaserPreTitle != null && (<div className="preTitle">{content.teaserPreTitle}</div>)}
          <h2>{content.teaserTitle}</h2>
          
          <p
            dangerouslySetInnerHTML={{
              __html: content.teaserDescription["html"],
            }}
          />

          {content.teaserCallToAction != null && (
            <a href="/" className="action-links">{content.teaserCallToAction}</a>
          )}
        </div>
      </div>
      <Image className="teaser-image" alt={content.teaserTitle} src={content.teaserImage} />
    </div>
  );
}

export default Teaser;

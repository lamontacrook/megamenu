import React from "react";

import "./teaser.css";
import Image from "../image";
import { LinkManager } from "../../utils";
import {Link} from "react-router-dom";


const Teaser = ({ content }) => {
  return (
    <div className={content.entityType}>
      <div className="floater">
        <div className="inner-content">
          {content.teaserPreTitle != null && (<div className="pre-title">{content.teaserPreTitle}</div>)}
          <h2 className="teaser-title">{content.teaserTitle}</h2>
          
          <div className="teaser-description"
            dangerouslySetInnerHTML={{
              __html: content.teaserDescription["html"],
            }}
          />

          {content.teaserCallToAction != null && (
             <Link
             to={{
               pathname: LinkManager(content.teaserLink),
  
             }} className="action-links">{content.teaserCallToAction}</Link>
             
          )}
        </div>
        </div>
      <Image className="teaser-image" alt={content.teaserTitle} src={content.teaserImage} />
    </div>
  );
}

export default Teaser;

import React from "react";
import ErrorScreen from "../Error";
import "./index.css";

export default function Teaser(props) {
  return (
    <div className={props.content.entityType}>
      <div className="floater">
        <div>
          <h2>{props.content.teaserTitle}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: props.content.teaserDescription["html"],
            }}
          />

          <a href="#" className="action-links">
            View Trips
          </a>
        </div>
      </div>
      <img
        className="teaser-image"
        src={props.content.teaserImage._publishUrl}
      />
    </div>
  );
}

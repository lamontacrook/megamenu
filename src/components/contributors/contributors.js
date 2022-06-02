import React from "react";
import Image from "../image";
import "./contributors.css";

const Contributors = ({ content }) => {
  return (
    <div className="contributors">
      <h2 className="underline">{content.contributorsTitle}</h2>
      <span className="contributor-description"><i>{content.contributorsDescription.plaintext}</i></span>
      <ul className="contributors-list">
        {content.contributors.map((contributor) => (
          <li className="contributor">
            <Image src={contributor.contributorImage} />
            <h3 className="contributor-name">{contributor.contributorName}</h3>
            <h5 className="contributor-profession">{contributor.contributorProfession}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contributors;

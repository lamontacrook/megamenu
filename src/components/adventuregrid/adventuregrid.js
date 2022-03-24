import React, { useState } from "react";
import { adventureList } from "../../api/queries";
import { useGraphQL } from "../../api/useGraphQL";
import ErrorScreen from "../Error";
import Image from "../image/image";
import Richtext from "../richtext";

import "./adventuregrid.css";

const AdventureGrid = ({ content }) => {
  console.log("in adventure grid");
  const { data, errors } = useGraphQL(adventureList);

  const [hasFetched, setHasFetched] = useState(false);

  if (errors != null) {
    setHasFetched(true);
    return <ErrorScreen error={errors} />;
  } else if (!hasFetched && data === null) {
    return <span></span>;
  } else if (hasFetched && !data.adventureList.items) {
    return <ErrorScreen error="There was an error with the returned data." />;
  } else if (data != null) {
    if (!hasFetched) setHasFetched(true);
    content["entityType"] = "underline";
    return (
      <div className="adventure-grid">
        <Richtext content={content} />
        <ul className="adventure-tabs">
            <li className="adventure-tab-item-active">All</li>
            <li className="adventure-tab-item">Climbing</li>
            <li className="adventure-tab-item">Cycling</li>
            <li className="adventure-tab-item">Skiing</li>
            <li className="adventure-tab-item">Surfing</li>
            <li className="adventure-tab-item">Travel</li>
        </ul>
        <ul className="adventure-list">
          {data.adventureList.items.map((adventure) => (
            <li className="adventure-item">
              <article>
                <Image src={adventure.adventurePrimaryImage} />
                <span className="adventure-item-title">
                  {adventure.adventureTitle}
                </span>
                <span className="adventure-item-description">
                  {adventure.adventureTitle}
                </span>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default AdventureGrid;

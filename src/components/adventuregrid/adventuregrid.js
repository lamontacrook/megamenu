import React, { useState } from "react";
import { adventureList } from "../../api/queries";
import { useGraphQL } from "../../api/useGraphQL";
import ErrorScreen from "../Error";
import Image from "../image/image";
import Richtext from "../richtext";
import { Link } from "react-router-dom";

import "./adventuregrid.css";
import { useParams } from "react-router-dom";
import { LinkManager } from "../../utils";

const AdventureGrid = ({ content }) => {
  
  const {filter} = useParams();

  const { data, errors } = useGraphQL(adventureList(filter));

  const [hasFetched, setHasFetched] = useState(false);

  const tabs = [
    "All",
    "Climbing",
    "Cycling",
    "Skiing",
    "Surfing",
    "Travel"
  ]

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
            {tabs.map((index) => {
              
              if(index === "All")
                return <li className={`adventure-tab-item${filter === undefined?'-active':''}`}><Link key={index.toLowerCase()} to={`/adventures/adventures`}>{index}</Link></li>
              else
                return <li className={`adventure-tab-item${index.toLowerCase()===filter?'-active':''}`}><Link key={index.toLowerCase()} to={`/adventures/adventures{${index.toLowerCase()}}`}>{index}</Link></li>
            })}
            
        </ul>
        <ul className="adventure-list">
          {data.adventureList.items.map((adventure) => (
            <li className="adventure-item">
              <article>
                <Link key={adventure.adventureTitle} to={LinkManager(adventure)}><Image src={adventure.adventurePrimaryImage} /></Link>
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

import React from "react";

import "./adventuredetail.css";

const AdventureDetail = ({ content }) => {
  console.log(content.adventureDetailReference);

  const RailItem = (title, activity) => (
    <li className="adventure-detail-side-rail-list">
      <span className="adventure-detail-side-rail-list-title">{title}</span>
      <span className="adventure-detail-side-rail-list-activity">
        {activity}
      </span>
    </li>
  );

  return (
    <div className="adventure-detail">
      <h1 className="underline">
        {content.adventureDetailReference.adventureTitle}
      </h1>
      <div className="adventure-detail-body">
        <div className="adventure-detail-side-rail">
          <ul className="adventure-detail-side-rail-list">
            {RailItem(
              "Activity",
              content.adventureDetailReference.adventureActivity
            )}
            {RailItem(
              "Adventure Type",
              content.adventureDetailReference.adventureType
            )}
            {RailItem(
              "Trip Length",
              content.adventureDetailReference.adventureTripLength
            )}
            {RailItem(
              "Group Size",
              content.adventureDetailReference.adventureGroupSize
            )}
            {RailItem(
              "Difficulty",
              content.adventureDetailReference.adventureDifficulty
            )}
            {RailItem("Price", content.adventureDetailReference.adventurePrice)}
          </ul>
        </div>

        <div className="adventure-detail-description">
          <ul className="adventure-detail-tabs">
            <li>Overview</li>
            <li>Itinerary</li>
            <li>What to Bring</li>
          </ul>

          <div className="adventure-detail-description-overview" dangerouslySetInnerHTML={{__html:content.adventureDetailReference.adventureDescription.html}} />
        </div>

      </div>
    </div>
  );
};

export default AdventureDetail;

import React from "react";

import Image from "../image/image";

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
            <li>
              <button
                className="adventure-detail-tabs-btn active"
                onClick={getContent}
              >
                Overview
              </button>
            </li>
            <li>
              <button
                className="adventure-detail-tabs-btn"
                onClick={getContent}
              >
                Itinerary
              </button>
            </li>
            <li>
              <button
                className="adventure-detail-tabs-btn"
                onClick={getContent}
              >
                What to Bring
              </button>
            </li>
          </ul>
          <div id="adventure-overview" className="adventure-detail-description-body overview">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  content.adventureDetailReference.adventureDescription.html,
              }}
            />
            <Image
              src={content.adventureDetailReference.adventurePrimaryImage}
            />
          </div>
          <div id="adventure-itinerary" className="adventure-detail-description-body itinerary">
          <span
              dangerouslySetInnerHTML={{
                __html:
                  content.adventureDetailReference.adventureItinerary.html,
              }}
            />
          </div>
          <div id="adventure-what-to-bring" className="adventure-detail-description-body what-to-bring">
          <span
              dangerouslySetInnerHTML={{
                __html:
                  content.adventureDetailReference.adventureGearList.html,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  function getContent(event) {
    console.log(event.target);
    var tabs = document.getElementsByClassName("adventure-detail-tabs-btn");
    for (var i = 0; i < tabs.length; i++) 
      tabs[i].className = "adventure-detail-tabs-btn";
    
    
    event.target.className += " active";
    let item = event.target.innerText.replaceAll(" ", "-").toLowerCase();

    let contents = document.getElementsByClassName("adventure-detail-description-body");
    for(i = 0; i < contents.length; i++)
        contents[i].style.display = "none";

    document.getElementById(`adventure-${item}`).style.display = "block";

  }
};

export default AdventureDetail;

import React from "react";
import ErrorScreen from "../Error";

export default function Teaser() {
  return (
    <span>
      <div className="floater">
        <div>
          <h2>WKND Adventures</h2>
          <p>
            Join us on one of our next adventures. Browse our list of curated
            experiences and sign up for one when you're ready to explore with
            us.
          </p>
          <a href="#" className="action-links">
            View Trips
          </a>
        </div>
      </div>
      <img
        className="teaser"
        src="https://wknd.site/us/en/_jcr_content/root/container/carousel/item_1571954853062.coreimg.60.1600.jpeg/1636662642365/adobestock-216674449.jpeg"
      />
    </span>
  );
}

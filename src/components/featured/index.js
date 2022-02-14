import React from "react";
import ErrorScreen from "../Error";
import './index.css';

export default function Featured() {
  return (
    <div className="block2">
      <div className="column40">
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
        className="column60"
        src="https://wknd.site/us/en/_jcr_content/root/container/carousel/item_1571954853062.coreimg.60.1600.jpeg/1636662642365/adobestock-216674449.jpeg"
      />
    </div>
  );
}

import React from "react";

import "./siderail.css";
import { LinkManager } from "../../utils";
import {Link} from "react-router-dom";


const SideRail = ({ content }) => {
  console.log(content);
    return content.sideRail ? (
      <div className="xf-side-rail">
        <h6>SHARE THIS STORY</h6>
        <ul className="xf-side-rail-list">
          {content.sideRail.map((story) => (
            <li>
              <Link
                to={{
                  pathname: LinkManager(story),
                }}
              replace >
                <span className="xf-side-rail-list-title">
                  {story.screenName}
                </span>
                <span className="xf-side-rail-list-date">
                  Thursday, 9 Jul 2020
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <h6>Whoops</h6>
    );
  }

  export default SideRail;
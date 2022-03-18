import React, { useState } from "react";
import ErrorScreen from "../components/Error";

import { screenQuery, screenByPath } from "../api/queries";
import { useGraphQL } from "../api/useGraphQL";

import Navigation from "../components/navigation";
import Entity from "../components/entity";

import { FaBars } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import Teaser from "../components/teaser/teaser";

const Screen = () => {

  const { path } = useParams();

  const request =
    path && path.startsWith(":content")
      ? screenByPath(path)
      : screenQuery(path || "home");

  const { data, errors } = useGraphQL(request);

  const [hasFetched, setHasFetched] = useState(false);

  if (errors != null) {
    setHasFetched(true);
    return <ErrorScreen error={errors} />;
  } else if (!hasFetched && data === null) {
    return <span>What to do here?</span>;
  } else if (hasFetched && !data.screen) {
    return <ErrorScreen error="There was an error with the returned data." />;
  } else if (data != null) {
    if (!hasFetched) setHasFetched(true);

    if (Array.isArray(data.screen.body)) data.screen.body = data.screen.body[0];
    let i = 0;
    //https://author-p24020-e217804.adobeaemcloud.com/editor.html/content/dam/megamenu/entities/home/home-screen
    return (
      <React.Fragment>
        <div className="login"><a href={`${process.env.REACT_APP_HOST_URI}/editor.html${data.screen.body._path}`} target="_blank" rel="noopener noreferrer">Edit Screen Fragment</a></div>
        <div className="main-container">
          <FaBars size={45} className="hamburger" />
          {getLogo()}

          <Navigation />

          {getSearch()}
        </div>

        <div className="main-body">
          {data.screen.body.block.map((item) => (
            <div key={`${item._model.title.toLowerCase().replace(" ",  "-")}-block-${item._model._path}-${i}`} className="block">
              <Entity
                key={`${item._model.title.toLowerCase().replace(" ",  "-")}-entity-${item._model._path}-${i++}`}
                type={item.__typename}
                content={item}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }

  function getSearch() {
    return (
      <form>
        <input type="search" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
    );
  }

  function getLogo() {
    return (
      <div className="logo">
        <Link to="/">
          <img
            src="https://wknd.site/content/experience-fragments/wknd/language-masters/en/site/header/master/_jcr_content/root/container/container_1195249223/image.coreimg.svg/1594412560447/wknd-logo-dk.svg"
            alt="logo"
            width="136"
          />
        </Link>
      </div>
    );
  }
};

export default Screen;

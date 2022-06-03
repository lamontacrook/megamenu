import React, { useState } from "react";
import ErrorScreen from "../components/Error";

import { screenQuery, screenByPath } from "../api/queries";
import { useGraphQL } from "../api/useGraphQL";

import Navigation from "../components/navigation";

import { FaBars } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ModelManager from "../components/modelmanager";
import {ConstructURL} from "../utils";


const Screen = () => {
 
  const props = useParams();
  const re = new RegExp('{([^}]*)}');

  const filters = re.exec(props.screen);

  if(filters && filters.length === 2) {
    props.screen = props.screen.replace(filters[0], '');
    props.filter = filters[1];
  }

  const request =
    props && ConstructURL(props)
      ? screenByPath(ConstructURL(props))
      : screenQuery("home");

  const { data, errors } = useGraphQL(request);

  const [hasFetched, setHasFetched] = useState(false);

  if (errors != null) {
    setHasFetched(true);
    return <div>here be errors</div>;
  } else if (!hasFetched && data === null) {
    return "Loading...";
  } else if (hasFetched && !data.screen) {
    return <ErrorScreen error="There was an error with the returned data." />;
  } else if (data != null) {
    if (!hasFetched) setHasFetched(true);

    if (Array.isArray(data.screen.body)) data.screen.body = data.screen.body[0];
    let i = 0;

    return (
      <React.Fragment>
        <div className="login">
        {process.env.NODE_ENV !== 'development' || <a
            href={`${process.env.REACT_APP_HOST_URI}/editor.html${data.screen.body._path}`}
            target="_blank"
            className="fragment-editor"
            rel="noopener noreferrer"
          >
            Edit Screen Fragment 
          </a>} 
        </div>
        <div className="main-container">
          <FaBars size={45} className="hamburger" />
          {getLogo()}

          <Navigation />

          {getSearch()}
        </div>

        <div className="main-body">
          {data.screen.body.block.map((item) => (
            <div
              key={`${item._model.title
                .toLowerCase()
                .replace(" ", "-")}-block-${item._model._path}-${i}`}
              className="block"
            >
              <ModelManager
                key={`${item._model.title
                  .toLowerCase()
                  .replace(" ", "-")}-entity-${item._model._path}-${i++}`}
                type={item.__typename}
                content={item}
                references={data.screen._references}
              >
                
              </ModelManager>
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

import React, { useState } from "react";
import ErrorScreen from "../../components/Error";

import { screenQuery } from "../../api/queries";
import { useGraphQL } from "../../api/useGraphQL";

import Navigation from "../../components/navigation";
import Entity from "../../components/entity";

import { Link, useParams } from "react-router-dom";

export default function Screen(props) {
  let n = 1;

  let { path } = useParams();

  /*if(props.name === 'screen' && path) 
    path = path.substring(0, path.length)
  else
    path = 'home';*/

  
  
  
  console.log(path || 'home');

  const { data, errors } = useGraphQL(screenQuery(path || 'home'));

  const [hasFetched, setHasFetched] = useState(false);

  if (errors != null) {
    setHasFetched(true);
    return <ErrorScreen error={errors} />;
  } else if (!hasFetched && data === null) {
    return <span>What to do here?</span>;
  } else if (hasFetched && !data.screenList.items) {
    return <ErrorScreen error="There was an error with the returned data." />;
  } else if (data != null) {
    if (!hasFetched) setHasFetched(true);

    return (
      <div className="grid-container">
        <div className="header">test</div>
        <div className="left row2">
          <Link to="/">
            <img
              src="https://wknd.site/content/experience-fragments/wknd/language-masters/en/site/header/master/_jcr_content/root/container/container_1195249223/image.coreimg.svg/1594412560447/wknd-logo-dk.svg"
              width="96"
            />
          </Link>
        </div>
        <div className="middle row2">
          <Navigation content={data.screenList.items[0]} />
        </div>

        <div className="right row2">
          <input
            className="search"
            data-cmp-hook-search="input"
            type="text"
            name="fulltext"
            placeholder="Search"
            role="combobox"
          />
        </div>

        {data.screenList.items[0].block.map((item) => (
          <div key={"block" + n} className={"block" + n++}>
            <Entity key={item.key} type={item._model.title.toLowerCase()} content={item} />
          </div>
        ))}

        <div className="footer">
          <p>Footer</p>
        </div>
      </div>
    );
  }
}

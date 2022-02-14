import React, { useState } from "react";
import ErrorScreen from "../../components/Error";

//import data from "../../api/gql.json";
import { screenQuery } from "../../api/queries";
import { useGraphQL } from "../../api/useGraphQL";

//import Image from "../image";

import Entity from "../../components/entity"
export default function Home(props) {
  const { data, errors } = useGraphQL(screenQuery);
  //const errors = null;

  const [hasFetched, setHasFetched] = useState(false);

  console.log();

  if (errors != null) {
    setHasFetched(true);
    return <ErrorScreen error={errors} />;
  } else if (!hasFetched && data === null) {
    return <span>What to do here?</span>;
  } else if (hasFetched && !data.screenList.items) {
    console.log(data.topList.items);
    return <ErrorScreen error="There was an error with the returned data." />;
  } else if (data != null) {
    if (!hasFetched) setHasFetched(true);

  return (
    <div class="grid-container">
      <div class="header">test</div>
      <div className="left row2">
        <img
          src="https://wknd.site/content/experience-fragments/wknd/language-masters/en/site/header/master/_jcr_content/root/container/container_1195249223/image.coreimg.svg/1594412560447/wknd-logo-dk.svg"
          width="96"
        />
      </div>
      <div className="middle row2">navigation</div>

      <div className="right row2">
        <input
          class="search"
          data-cmp-hook-search="input"
          type="text"
          name="fulltext"
          placeholder="Search"
          role="combobox"
          aria-autocomplete="list"
          aria-haspopup="true"
          aria-invalid="false"
          aria-expanded="false"
          aria-owns="cmp-search-results-0"
        />
      </div>

      
      <Entity type="teaser" />
      <Entity type="featured" />    

      <div className="footer">
        <p>Footer</p>
      </div>
    </div>
  );
}}

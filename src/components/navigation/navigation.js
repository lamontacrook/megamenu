import React, { useState } from "react";
import "./navigation.css";
import { navigationQuery } from "../../api/queries";
import { useGraphQL } from "../../api/useGraphQL";
import ErrorScreen from "../Error";

const Navigation = ({ content }) => {
  const { data, errors } = useGraphQL(navigationQuery);

  const [hasFetched, setHasFetched] = useState(false);

  if (errors != null) {
    setHasFetched(true);
    return <ErrorScreen error={errors} />;
  } else if (!hasFetched && data === null) {
    return <span>What to do here?</span>;
  } else if (hasFetched && !data.topList.items) {
    return <ErrorScreen error="There was an error with the returned data." />;
  } else if (data != null) {
    if (!hasFetched) setHasFetched(true);

    return (
      <div class="menu-wrap">
        {data.topList.items[0].menuItems.map((item) => (
          <a
            href={"#/" + item._path.split("/").slice(-1)}
            className="list-item"
          >{item.screenName}</a>
        ))}
      </div>
    );
  }
};

export default Navigation;

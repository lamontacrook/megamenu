import React, { useState } from "react";
import "./navigation.css";
import { navigationQuery } from "../../api/queries";
import { useGraphQL } from "../../api/useGraphQL";
import ErrorScreen from "../Error";
import { LinkManager } from "../../utils";
import { Link } from "react-router-dom";


const Navigation = ({ content }) => {
  const { data, errors } = useGraphQL(navigationQuery);

  const [hasFetched, setHasFetched] = useState(false);

  if (errors != null) {
    setHasFetched(true);
    return <ErrorScreen error={errors} />;
  } else if (!hasFetched && data === null) {
    return <span></span>;
  } else if (hasFetched && !data.topList.items) {
    return <ErrorScreen error="There was an error with the returned data." />;
  } else if (data != null) {
    if (!hasFetched) setHasFetched(true);

    return (
      <div className="menu-wrap">
        {data.topList.items[0].menuItems.map((item) => (
          <Link key={item.screenName} className="list-item" to={LinkManager(item)}>{item.screenName}</Link>
        ))}
      </div>
    );
  }
};

export default Navigation;

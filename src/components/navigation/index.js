import React, { useState } from "react";
import "./index.css";
import { navigationQuery } from "../../api/queries";
import { useGraphQL } from "../../api/useGraphQL";
import ErrorScreen from "../Error";
import { NavLink, Navbar, Nav, Container } from "react-bootstrap";

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
      <Container>
        <Navbar
          collapseOnSelect
          className="justify-content-right"
          expand="lg"
          variant="light"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {data.topList.items[0].menuItems.map((item) => (
                <NavLink
                  key={item.screenName.toLowerCase()}
                  href={"#/" + item._path.split("/").slice(-1)}
                >
                  {item.screenName}
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
};

export default Navigation;

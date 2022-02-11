import React, { useState } from "react";
import ErrorScreen from "../Error";

//import data from "../../api/gql.json";
import { navigationListQuery } from "../../api/queries";
import { useGraphQL } from "../../api/useGraphQL";

import Image from "../image";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default function Navigation() {
  const { data, errors } = useGraphQL(navigationListQuery);
  //const errors = null;

  const [hasFetched, setHasFetched] = useState(false);

  console.log();

  if (errors != null) {
    setHasFetched(true);
    return <ErrorScreen error={errors} />;
  } else if (!hasFetched && data === null) {
    return <span>What to do here?</span>;
  } else if (hasFetched && !data.topList.items) {
    console.log(data.topList.items);
    return <ErrorScreen error="There was an error with the returned data." />;
  } else if (data != null) {
    if (!hasFetched) setHasFetched(true);

    return (
      <Container>
        <Navbar collapseOnSelect className="justify-content-right" expand="lg" variant="light" bg="light">
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {data.topList.items[0].menuItems.map((item) => (

                <NavDropdown title={item.menuName} id="collasible-nav-dropdown">
                  {item.items.map((category) => (

                    <NavDropdown.Header title={category.categoryName}>{category.categoryName}
                      <NavDropdown.Divider />
                      {category.category.map((links) => (
                        <NavDropdown.Item href={links.linkUrl}>
                          {links.linkName}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown.Header>


                  ))}

                </NavDropdown>

              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );


  }
}

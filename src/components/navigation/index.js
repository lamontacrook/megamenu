import React, { useState } from "react";
import ErrorScreen from "../Error";

import Image from "../image";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default function Navigation(props) {
  console.log(typeof props.content);
  return (
    <Container>
      <Navbar
        collapseOnSelect
        className="justify-content-right"
        expand="lg"
        variant="light"
        bg="light"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {props.content.navigation.menuItems.map((item) => (
              <NavDropdown title={item.menuName} id="basic-nav-dropdown">
                {item.items.map((links) => (
                  <NavDropdown.Item href={links.linkURL}>
                    {links.linkName}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

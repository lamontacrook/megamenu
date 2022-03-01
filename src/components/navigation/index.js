import React, { useState } from "react";
import ErrorScreen from "../Error";

import Image from "../image";

import { NavLink, Navbar, Nav, Container } from "react-bootstrap";


export default function Navigation(props) {
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
              <NavLink key={item.menuName.toLowerCase()} href={"#/" + item.menuLink}>{item.menuName}</NavLink>         
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

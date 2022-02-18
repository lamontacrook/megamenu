import React, { useState } from "react";
import ErrorScreen from "../Error";

import Image from "../image";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default function XF(props) {
    return (
        <h1>{props.content.name}</h1>
    )
}
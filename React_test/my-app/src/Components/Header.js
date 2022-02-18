import React, { Component } from "react";
import {
  Container,
  FormControl,
  Nav,
  Navbar,
  Form,
  Button,
} from "react-bootstrap";
import logo from "./Flang_logo.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

export default class Header extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/blog" component={Blog} />
          </Routes>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  height="24"
                  width="155"
                  className="d-inline-block alighn-top"
                  alt="Logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    {" "}
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    {" "}
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contacts">
                    {" "}
                    Contacts
                  </Nav.Link>
                  <Nav.Link as={Link} to="/blog">
                    {" "}
                    Blog
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="d-inline mx-2"
                  />
                  <Button variant="outline-info">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Router>
      </>
    );
  }
}

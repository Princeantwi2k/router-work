import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: `black`, paddingLeft: `900px` }}>
        <Link to="/">
          <Button variant="outline-success">Home </Button>
        </Link>
        <Link to="/about">
          {" "}
          <Button variant="outline-success">About </Button>{" "}
        </Link>
        <Link to="/service">
          {" "}
          <Button variant="outline-success">Service </Button>{" "}
        </Link>
        <Link to="/contact">
          {" "}
          <Button variant="outline-success">Contact </Button>{" "}
        </Link>
      </Navbar>
    </div>
  );
};

export default Nav;

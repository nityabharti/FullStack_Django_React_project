import { Nav, Navbar } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import React from "react";

const NavBarMenu = () => {
  const logoUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhq2XltXJVN36xJ0BkllPdoKbZ-sMZmv5Z0Gure5LgaZkPyFd2SPMBI2frZZVgfM8K_po&usqp=CAU";
  return (
    <div>
      {" "}
      <Navbar expand="lg" bg="secondary">
        <Navbar.Brand href="#home">
          {" "}
          <img
            src={logoUrl}
            alt="Products Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
            style={{ marginLeft: "10px", borderRadius: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="me-auto">
          <NavLink className="show-products-nav" to="/">
            Products
          </NavLink>
          <NavLink className="add-product-nav" to="/addProduct">
            Add Products
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBarMenu;

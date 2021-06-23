import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
  Nav,
  BrandLink,
  HamburgerMenu,
  Menu,
  MenuLinks,
  LinkContLeft,
  LinkContRight,
  MenuBtnLink,
} from "./Navbar.styles";

function Navbar(props) {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const { location } = props;
  const key = location.key;

  useEffect(() => {
    setNavBarOpen(false);
  }, [key]);
  return (
    <Nav>
      <BrandLink to="/">Shortly</BrandLink>
      <HamburgerMenu
        onClick={e => {
          setNavBarOpen(!navBarOpen);
        }}
      >
        <span />
        <span />
        <span />
      </HamburgerMenu>
      <Menu open={navBarOpen}>
        <LinkContLeft>
          <MenuLinks to="/features">Features</MenuLinks>
          <MenuLinks to="/pricing">Pricing</MenuLinks>
          <MenuLinks to="/resources">Resources</MenuLinks>
        </LinkContLeft>
        <LinkContRight>
          <MenuLinks to="/login">Login</MenuLinks>
          <MenuBtnLink role="button" to="/signup">
            Sign Up
          </MenuBtnLink>
        </LinkContRight>
      </Menu>
    </Nav>
  );
}

export default withRouter(Navbar);

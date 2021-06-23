import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Nav = styled.div`
  padding: 1em 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
  @media (max-width: 375px) {
    padding: 1em 1em;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const BrandLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 30px;
  font-weight: 700;
`;

export const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: transparent;
  margin-left: auto;
  span {
    height: 2px;
    width: 35px;
    background-color: #9a9a9a;
    margin-block: 4px;
  }
  @media (min-width: 376px) {
    display: none;
  }
`;
export const Menu = styled.div`
  padding-inline: 1rem;
  display: flex;
  flex-direction: row;
  width: calc(100% - 4em);
  transition: all 0.6s linear;
  @media (max-width: 375px) {
    flex-direction: column;
    position: fixed;
    left: 1em;
    right: 0;
    top: 4em;
    width: 82%;
    overflow: hidden;
    margin-top: 1em;
    background-color: #3b3054;
    border-radius: 0.4em;
    max-height: ${props => (props.open ? "20em" : "0")};
  }
`;
export const MenuLinks = styled(NavLink)`
  text-decoration: none;
  color: #9e9aa7;
  font-size: 18px;
  font-weight: 700;
  margin-inline: 0.8em;
  transition: all 0.3s ease;
  &.active {
    color: black;
  }
  @media (max-width: 375px) {
    margin-block: 1em;
    color: white;
  }
`;

export const LinkContLeft = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: 375px) {
    flex-direction: column;
    margin: auto;
    width: 100%;
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: #bfbfbf;
      position: absolute;
      left: 0;
      bottom: -20px;
      display: flex;
      margin-top: 1em;
      margin-bottom: 1em;
    }
  }
`;
export const LinkContRight = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 375px) {
    flex-direction: column;
    margin: auto;
    width: 100%;
  }
`;

export const MenuBtnLink = styled(Link)`
  background-color: #2acfcf;
  text-decoration: none;
  width: 7em;
  color: white;
  text-align: center;
  padding-block: 0.4em;
  border-radius: 1.5rem;
  transition: all 0.3s ease;
  margin-left: 1em;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 375px) {
    width: 90%;
    padding-block: 0.6em;
    margin-bottom: 2em;
  }
`;

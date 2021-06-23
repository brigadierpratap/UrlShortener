import styled from "styled-components";
import shorten from "../assets/images/bg-shorten-desktop.svg";
import shortenMobile from "../assets/images/bg-shorten-mobile.svg";

export const Container = styled.div`
  padding-inline: 5em;
  background-color: rgb(240, 241, 246);
  @media (max-width: 375px) {
    padding-inline: 1em;
  }
`;
export const InnerContainer = styled.div`
  background-image: url(${shorten});
  background-position: center;
  background-size: cover;
  background-color: #232127;
  padding: 2.5em;
  margin-top: -5em;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 0.5em;
  position: relative;
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    background-image: url(${shortenMobile});
    border-radius: 0%.5em;
    padding: 2em;
  }
`;

export const UrlInput = styled.input`
  padding-left: 1.5em;
  outline: none;
  border: ${props => (props.error ? "2px solid red" : "none")};
  height: 3em;
  border-radius: 0.5em;
  width: 70%;
  font-size: 18px;
  position: relative;
  &:focus {
    outline: none;
    border: ${props => (props.error ? "2px solid red" : "none")};
  }
  &::placeholder {
    color: ${props => (props.error ? "red" : "none")};
    font-weight: 500;
  }
  @media (max-width: 375px) {
    width: 90%;
    padding-left: 1em;
  }
`;

export const ShortenBtn = styled.button`
  background-color: rgba(42, 207, 207, 1);
  color: white;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  border: none;
  border-radius: 0.5em;
  width: 20%;
  cursor: ${props => (props.loading ? "not-allowed" : "pointer")};

  &:hover {
    background-color: #9be3e2;
  }
  @media (max-width: 375px) {
    width: 100%;
    padding-block: 0.7em;
    margin-top: 1em;
  }
`;
export const ValidationMsg = styled.span`
  position: absolute;
  bottom: 1em;
  left: 4.4em;
  max-width: 90%;
  color: red;
  font-style: italic;
  font-size: 15px;
  @media (max-width: 375px) {
    position: relative;
    display: block;
    left: 0;
    bottom: 0;
    margin-top: 0.2em;
    width: 100%;
    max-width: 100%;
  }
`;

export const LinksContainer = styled.div`
  padding: 2em;
  padding-block: 1.5em;
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  background-color: white;
  align-items: center;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    padding: 1em;
  }
`;

export const OldLink = styled.span`
  white-space: nowrap;
  max-width: 55%;
  width: 55%;
  text-overflow: ellipsis;
  font-size: 18px;
  overflow: hidden;

  @media (max-width: 375px) {
    max-width: 100%;
    width: 100%;
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: #bfbfbf;
      position: absolute;
      left: 0;
      display: flex;
      margin-top: 1em;
      margin-bottom: 1em;
    }
  }
`;

export const ShortenedLink = styled.span`
  white-space: nowrap;
  max-width: 30%;
  text-overflow: ellipsis;
  font-size: 18px;
  color: #2acfcf;
  overflow: hidden;
  width: 30%;
  @media (max-width: 375px) {
    max-width: 100%;
    width: 100%;
    margin-top: 2em;
    margin-bottom: 1em;
  }
`;
export const CopyBtn = styled.button`
  white-space: nowrap;
  max-width: 10%;
  text-overflow: ellipsis;
  font-size: 18px;
  width: 10em;
  outline: none;
  border: none;
  border-radius: 0.3em;
  background-color: #2acfcf;
  color: white;
  padding-inline: 1em;
  padding-block: 0.5em;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 375px) {
    max-width: 100%;
    width: 100%;
    margin-bottom: 1em;
  }
`;

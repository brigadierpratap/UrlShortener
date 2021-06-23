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
  border-radius: 0%.5em;
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    background-image: url(${shortenMobile});
    border-radius: 0%.5em;
  }
`;

export const UrlInput = styled.input`
  padding-left: 1.5em;
  outline: none;
  border: none;
  height: 3em;
  border-radius: 0.5em;
  width: 70%;
  font-size: 18px;
  &:focus {
    outline: none;
    border: none;
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
  &:hover {
    background-color: #9be3e2;
  }
  @media (max-width: 375px) {
    width: 100%;
    padding-block: 0.7em;
    margin-top: 1em;
  }
`;

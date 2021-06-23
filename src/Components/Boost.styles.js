import styled from "styled-components";
import desktopBg from "../assets/images/bg-boost-desktop.svg";
export const Container = styled.div`
  width: 100%;
  background-image: url(${desktopBg});
  background-size: cover;
  padding-block: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3b3054;
`;
export const Title = styled.span`
  color: white;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 1em;
  @media (max-width: 375px) {
    font-size: 25px;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 1.5em;
  color: white;
  background-color: #2acfcf;
  font-size: 18px;
  font-weight: 700;
  width: 9em;
  padding-block: 0.5em;
  cursor: pointer;
  &:hover {
    background-color: #9be3e2;
  }
`;

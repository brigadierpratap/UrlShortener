import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 5em;
  margin-top: 2em;
  padding-bottom: 10em;
  @media (max-width: 375px) {
    flex-direction: column-reverse;
    padding-left: 1em;
    text-align: center;
  }
`;

export const LeftDivIntro = styled.div`
  width: 50%;
  padding-top: 5em;
  padding-right: 6em;
  display: flex;
  flex-direction: column;
  @media (max-width: 375px) {
    width: 100%;
    padding-top: 2em;
    padding-right: 0;
    align-items: center;
  }
`;

export const Title = styled.span`
  font-size: 54px;
  font-weight: 700;
  @media (max-width: 375px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.span`
  font-size: 18px;
  color: #9a9a99;
`;

export const StartedButton = styled.button`
  background-color: #2acfcf;
  color: white;
  font-weight: 700;
  border-radius: 1.5em;
  width: 10em;
  text-align: center;
  margin-top: 2em;
  font-size: 18px;
  padding-block: 0.6em;
  outline: none;
  border: none;
  margin-bottom: 5em;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const RightDivIntro = styled.div`
  width: 100%;
  max-width: 100%;
  img {
    width: 100%;
    max-width: 100%;
  }
`;

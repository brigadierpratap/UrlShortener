import React from "react";
import {
  Container,
  LeftDivIntro,
  RightDivIntro,
  StartedButton,
  SubTitle,
  Title,
} from "./Intro.styles";
import working from "../assets/images/illustration-working.svg";
function Intro() {
  return (
    <Container>
      <LeftDivIntro>
        <Title>More than just shorter links</Title>
        <SubTitle>
          Get your brand's recognition and get detailed insights on how your
          links are performing.
        </SubTitle>
        <StartedButton>Get Started </StartedButton>
      </LeftDivIntro>
      <RightDivIntro>
        <img src={working} alt="working" />
      </RightDivIntro>
    </Container>
  );
}

export default Intro;

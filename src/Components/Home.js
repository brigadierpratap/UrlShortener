import React, { Component } from "react";
import styled from "styled-components";
import AdvanceStats from "./AdvanceStats";
import Boost from "./Boost";
import Intro from "./Intro";
import Shorten from "./Shorten";

class Home extends Component {
  render() {
    return (
      <Container>
        <Intro />
        <Shorten />
        <AdvanceStats />
        <Boost />
      </Container>
    );
  }
}
const Container = styled.div`
  overflow-x: hidden;
`;
export default Home;

import React, { Component } from "react";
import styled from "styled-components";
import AdvanceStats from "./AdvanceStats";
import Boost from "./Boost";
import Intro from "./Intro";
import Shorten from "./Shorten";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { animate: false };
    this.onScroll = this.onScroll.bind(this);
  }
  onScroll = e => {
    if (window.scrollY > 350 && !this.state.animate) {
      this.setState({ animate: true });
    } else if (window.scrollY < 350 && this.state.animate) {
      this.setState({ animate: false });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  render() {
    return (
      <Container>
        <Intro />
        <Shorten />
        {this.state.animate && <AdvanceStats />}
        <Boost />
      </Container>
    );
  }
}
const Container = styled.div`
  overflow-x: hidden;
`;
export default Home;

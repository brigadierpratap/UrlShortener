import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import { Container } from "./Main.styles";
import Navbar from "./Navbar";
class Main extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </Container>
    );
  }
}

export default Main;

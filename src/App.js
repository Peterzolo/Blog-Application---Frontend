import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./appStyle/app.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";
import { Container } from "@material-ui/core";
import Authentication from "./components/user/Authentication";

const App = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/auth" exact component={Authentication} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

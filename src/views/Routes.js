import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Homeeeee from "./Homeeeee";
import Resp from "./Resp";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/homeeeee" component={Homeeeee} />
      <Route path="/resp" component={Resp} />
    </Router>
  );
};

export default Routes;

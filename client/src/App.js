import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import Auth from "./pages/SignIn/index";

import "./styles/global.css";

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

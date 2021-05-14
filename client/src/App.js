import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import AppBar from "./components/AppBar/AppBar.js";
import modules from "./modules/index";

import "./styles/global.css";

const App = () => (
  <BrowserRouter>
    <div>
      <AppBar />
      <ToastProvider placement="bottom-right">
        <Switch>
          {modules.map((module) => (
            <Route {...module.routeProps} exact key={module.name} />
          ))}
        </Switch>
      </ToastProvider>
    </div>
  </BrowserRouter>
);

export default App;

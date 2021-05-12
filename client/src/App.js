import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import AppBar from "./components/AppBar/AppBar.js";
import CreateQuiz from "./pages/CreateQuiz/CreateQuiz.js";
import Home from "./pages/Home/Home.js";
import Profile from "./pages/Profile/Profile.js";
import ReplyQuiz from "./pages/ReplyQuiz/ReplyQuiz";
import Auth from "./pages/SignIn/index";

import "./styles/global.css";

const App = () => (
  <BrowserRouter>
    <div>
      <AppBar />
      <ToastProvider placement="bottom-right">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/quiz/create" exact component={CreateQuiz} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/quiz/reply/:id" exact component={ReplyQuiz} />
        </Switch>
      </ToastProvider>
    </div>
  </BrowserRouter>
);

export default App;

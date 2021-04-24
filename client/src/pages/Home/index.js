import Container from "@material-ui/core/Container";
import React from "react";

import AppBar from "../../components/AppBar/AppBar";
import QuizList from "../../components/QuizList/QuizList";

import "../../styles/global.css";

const Home = () => (
  <>
    <AppBar />
    <Container>
      <QuizList />
    </Container>
  </>
);

export default Home;

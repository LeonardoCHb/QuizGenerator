import Container from "@material-ui/core/Container";
import React from "react";

import QuizList from "../../components/QuizList/QuizList";

import "../../styles/global.css";

const Home = () => (
  <>
    <Container>
      <QuizList />
    </Container>
  </>
);

export default Home;

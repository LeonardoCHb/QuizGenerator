import Container from "@material-ui/core/Container";
import React from "react";

import ButtonCreateQuiz from "../../components/ButtonCreateQuiz/ButtonCreateQuiz";
import QuizList from "../../components/QuizList/QuizList";

const Home = () => (
  <>
    <ButtonCreateQuiz />
    <Container>
      <QuizList />
    </Container>
  </>
);

export default Home;

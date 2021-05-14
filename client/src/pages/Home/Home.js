import Container from "@material-ui/core/Container";
import React from "react";

import QuizList from "../../components/QuizList/QuizList";

const Home = () => {
  return (
    <>
      <Container maxWidth="md">
        <QuizList />
      </Container>
    </>
  );
};

export default Home;

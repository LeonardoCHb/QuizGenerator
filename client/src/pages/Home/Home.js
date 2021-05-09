import Container from "@material-ui/core/Container";
import React, { useState } from "react";

import ButtonCreateQuiz from "../../components/ButtonCreateQuiz/ButtonCreateQuiz";
import QuizList from "../../components/QuizList/QuizList";
import SearchBox from "../../components/SearchBox/SearchBox";
import styles from "./styles.js";

const useStyles = styles;

const Home = () => {
  const [filter, setFilter] = useState("");
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md" className={`${classes.paper}`}>
        <SearchBox
          className={`${classes.cardActions}`}
          searchChange={setFilter}
        />
        <div className={`${classes.grow}`} />
        <ButtonCreateQuiz />
      </Container>
      <Container maxWidth="md">
        <QuizList filter={filter} />
      </Container>
    </>
  );
};

export default Home;

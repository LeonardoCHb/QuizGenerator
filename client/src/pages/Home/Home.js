import Container from "@material-ui/core/Container";
import React, { useState } from "react";

import QuizList from "../../components/QuizList/QuizList";
import SearchBox from "../../components/SearchBox/SearchBox";
import styles from "./styles.js";

const useStyles = styles;

const Home = () => {
  const [filter, setFilter] = useState("");
  const classes = useStyles();

  return (
    <>
      <SearchBox
        className={`${classes.cardActions}`}
        searchChange={setFilter}
      />
      <Container maxWidth="md">
        <QuizList filter={filter} />
      </Container>
    </>
  );
};

export default Home;

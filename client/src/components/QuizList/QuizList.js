import { Container } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
// import Skeleton from "@material-ui/lab/Skeleton";
// react
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { findAllQuizzes } from "../../actions/quiz";
import ButtonCreateQuiz from "../ButtonCreateQuiz/ButtonCreateQuiz.js";
import QuizCard from "./QuizCard/QuizCard.js";
import styles from "./QuizListStyles.js";

const useStyles = styles;

export default function QuizList({ filter }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const quizzes = useSelector((state) => state.quiz);
  const [AllQuizzes, setAllQuizzes] = React.useState([]);

  useEffect(() => {
    dispatch(findAllQuizzes());
  }, []);

  useEffect(() => {
    const filteredQuizzes = quizzes.filter((quiz) => {
      return quiz.title.toLowerCase().includes(filter.toLowerCase());
    });
    setAllQuizzes(filteredQuizzes);
  }, [filter, quizzes]);

  return !AllQuizzes.length ? (
    <CircularProgress />
  ) : (
    <Container className={classes.root}>
      <Container className={classes.CreateContainer}>
        <ButtonCreateQuiz />
      </Container>
      <Grid container alignItems="stretch" spacing={6}>
        {AllQuizzes.map((quiz) => (
          <QuizCard key={quiz._id} quiz={quiz} />
        ))}
      </Grid>
    </Container>
  );
}

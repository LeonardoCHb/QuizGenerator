import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
// react
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { findAllQuizzes } from "../../actions/quiz";
import ButtonCreateQuiz from "../ButtonCreateQuiz/ButtonCreateQuiz";
import QuizCard from "./QuizCard/QuizCard.js";
import styles from "./QuizListStyles";

const useStyles = styles;

export default function QuizList() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const quizzes = useSelector((state) => state.quiz);
  const filter = useSelector((state) => state.quizSearch);
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
    <div className={classes.root}>
      <ButtonCreateQuiz />
      <Grid container alignItems="stretch" spacing={3}>
        {AllQuizzes.map((quiz) => (
          <QuizCard key={quiz._id} quiz={quiz} />
        ))}
      </Grid>
    </div>
  );
}

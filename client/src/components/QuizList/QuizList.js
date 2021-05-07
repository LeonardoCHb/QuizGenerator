import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
// react
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { findAllQuizzes } from "../../actions/quiz";
import QuizCard from "../QuizCard/QuizCard";
import styles from "./QuizListStyles";

const useStyles = styles;

export default function QuizList() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const AllQuizzes = useSelector((state) => state.quiz);
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(findAllQuizzes());
  }, []);

  const checkIfQuizIsPublic = (quiz) => {
    return quiz.public;
  };

  if (!user?.result?.name) {
    AllQuizzes.filter(checkIfQuizIsPublic);
  }

  return !AllQuizzes.length ? (
    <CircularProgress />
  ) : (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid container item xs={13} spacing={3}>
          {AllQuizzes.map((quiz) => (
            <QuizCard key={quiz._id} quiz={quiz} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

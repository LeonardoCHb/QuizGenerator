import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
// react
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { findAllCreatorQuizzes } from "../../actions/quiz";
import QuizCard from "../QuizCard/QuizCard";
import styles from "./CreatorQuizzesStyles.js";

const useStyles = styles;

export default function QuizList() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const AllQuizzes = useSelector((state) => state.quiz);
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log(AllQuizzes);
  console.log(user?.result.googleId);

  useEffect(() => {
    dispatch(findAllCreatorQuizzes(user?.result.googleId));
  }, []);

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

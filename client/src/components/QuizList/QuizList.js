import Grid from "@material-ui/core/Grid";
import axios from "axios";
// react
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import FormRow from "../QuizCard/QuizCard";
import styles from "./QuizListStyles";

const useStyles = styles;

export default function NestedGrid() {
  const classes = useStyles();
  const quizzes = useSelector((state) => state.quiz);

  const [AllQuizzes, setAllQuizzes] = useState([]);
  console.log(AllQuizzes);
  useEffect(() => {
    axios.get("http://localhost:5000/quiz/findAll").then((AllQuizzes) => {
      setAllQuizzes(AllQuizzes.data);
    });
  }, []);

  console.log(quizzes);

  return !AllQuizzes.length ? (
    <div></div>
  ) : (
    <div className={classes.root}>
      {AllQuizzes.map((quiz) => (
        <Grid key={quiz._id} container spacing={4}>
          <Grid container item xs={13} spacing={3}>
            <FormRow quiz={quiz} />
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

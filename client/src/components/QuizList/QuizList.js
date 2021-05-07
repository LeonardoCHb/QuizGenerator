import Grid from "@material-ui/core/Grid";
import axios from "axios";
// react
import React, { useEffect, useState } from "react";

import QuizCard from "../QuizCard/QuizCard";
import styles from "./QuizListStyles";

const useStyles = styles;

export default function QuizList() {
  const classes = useStyles();

  const [AllQuizzes, setAllQuizzes] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/quiz/findAll").then((AllQuizzes) => {
      setAllQuizzes(AllQuizzes.data);
    });
  }, []);

  return !AllQuizzes.length ? (
    <div></div>
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

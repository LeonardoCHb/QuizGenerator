import { Container, Typography } from "@material-ui/core/";
// react
import React from "react";

import styles from "./CreatorQuizzesStyles.js";
import QuizCard from "./QuizCardProfile/QuizCard";

const useStyles = styles;

export default function QuizList({ quizzes }) {
  const classes = useStyles();

  return !quizzes.length ? (
    <Typography variant="p">:(</Typography>
  ) : (
    <Container maxWidth="md" className={classes.paper}>
      {quizzes.map((quiz) => (
        <QuizCard key={quiz._id} quiz={quiz} />
      ))}
    </Container>
  );
}

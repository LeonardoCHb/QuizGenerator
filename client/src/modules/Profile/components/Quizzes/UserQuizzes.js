// estilização
import { Container, Typography } from "@material-ui/core/";
// react
import React from "react";

import QuizCardUser from "./QuizCardUser/QuizCardUser";
import styles from "./UserQuizzesStyles.js";

const useStyles = styles;

export default function QuizList({ quizzes }) {
  const classes = useStyles();

  return !quizzes.length ? (
    <Typography variant="p">:(</Typography>
  ) : (
    <Container maxWidth="md" className={classes.paper}>
      {quizzes.map((quiz) => (
        <QuizCardUser key={quiz._id} quiz={quiz} />
      ))}
    </Container>
  );
}

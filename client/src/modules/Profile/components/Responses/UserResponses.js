// estilização
import { Container, Typography } from "@material-ui/core";
// react
import React from "react";

import QuizCard from "./QuizCardResponses/QuizCardResponses";
import styles from "./UserResponsesStyles.js";

const useStyles = styles;

export default function ResponseList({ responses }) {
  const classes = useStyles();

  return !responses.length ? (
    <Typography variant="h6">:(</Typography>
  ) : (
    <Container maxWidth="md" className={classes.paper}>
      {responses.map((response) => (
        <QuizCard key={response._id} response={response} />
      ))}
    </Container>
  );
}

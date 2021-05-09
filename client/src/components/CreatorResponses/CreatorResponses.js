import { Container } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
// react
import React from "react";

import styles from "./CreatorResponsesStyles.js";
import QuizCard from "./QuizCardProfile/QuizCard";

const useStyles = styles;

export default function ResponseList({ responses }) {
  const classes = useStyles();
  console.log(responses);

  return !responses.length ? (
    <CircularProgress />
  ) : (
    <Container maxWidth="md" className={classes.paper}>
      {responses.map((response) => (
        <QuizCard key={response._id} response={response} />
      ))}
    </Container>
  );
}

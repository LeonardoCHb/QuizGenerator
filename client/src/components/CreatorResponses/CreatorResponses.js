import { Container, Typography } from "@material-ui/core";
// react
import React from "react";

import styles from "./CreatorResponsesStyles.js";
import QuizCard from "./QuizCardProfile/QuizCard";

const useStyles = styles;

export default function ResponseList({ responses }) {
  const classes = useStyles();

  return !responses.length ? (
    <Typography variant="p">:(</Typography>
  ) : (
    <Container maxWidth="md" className={classes.paper}>
      {responses.map((response) => (
        <QuizCard key={response._id} response={response} />
      ))}
    </Container>
  );
}

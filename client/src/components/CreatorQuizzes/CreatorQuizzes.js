// import { Paper } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
import React from "react";

import QuizList from "../QuizList/QuizList.js";
// import styles from "./styles.js";

// const useStyles = styles;

export default function CreatorQuizzes({ quiz }) {
  console.log(quiz);
  // const classes = useStyles();
  return (
    <>
      <QuizList />
    </>
  );
}

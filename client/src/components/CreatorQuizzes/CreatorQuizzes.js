// import { Paper } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
import React from "react";
// import { useDispatch } from "react-redux";

// import findAllCreatorQuizzes from "../../actions/quiz.js";
import QuizList from "../QuizList/QuizList.js";
// import styles from "./styles.js";

// const useStyles = styles;

export default function CreatorQuizzes({ quiz }) {
  // const dispatch = useDispatch();
  console.log(quiz);
  // const classes = useStyles();
  return (
    <>
      <QuizList />
    </>
  );
}

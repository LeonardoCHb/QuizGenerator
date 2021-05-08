import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
// import Skeleton from "@material-ui/lab/Skeleton";
// react
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { findAllQuizzes } from "../../actions/quiz";
import QuizCard from "../QuizCard/QuizCard";
import styles from "./QuizListStyles";

const useStyles = styles;

export default function QuizList({ filter }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const quizzes = useSelector((state) => state.quiz);
  const [AllQuizzes, setAllQuizzes] = React.useState([]);

  console.log(AllQuizzes);

  useEffect(() => {
    dispatch(findAllQuizzes());
  }, []);

  useEffect(() => {
    const filteredQuizzes = quizzes.filter((quiz) => {
      return quiz.title.toLowerCase().includes(filter.toLowerCase());
    });
    setAllQuizzes(filteredQuizzes);
  }, [filter, quizzes]);

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

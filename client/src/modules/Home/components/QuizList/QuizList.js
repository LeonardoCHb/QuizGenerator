// estilização
import { CircularProgress, Grid } from "@material-ui/core";
// react
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// componentes
import { findAllQuizzes } from "../../../../actions/quiz";
import ButtonCreateQuiz from "../ButtonCreateQuiz/ButtonCreateQuiz";
import QuizCard from "./QuizCard/QuizCard.js";

export default function QuizList() {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quiz);
  const filter = useSelector((state) => state.quizSearch);
  const [AllQuizzes, setAllQuizzes] = React.useState([]);

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
    <div>
      <ButtonCreateQuiz />
      <Grid container alignItems="stretch" spacing={3}>
        {AllQuizzes.map((quiz) => (
          <QuizCard key={quiz._id} quiz={quiz} />
        ))}
      </Grid>
    </div>
  );
}

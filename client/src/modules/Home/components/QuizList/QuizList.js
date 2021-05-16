// estilização
import { Typography, Grid } from "@material-ui/core";
// react
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// componentes
import { findAllQuizzes } from "../../../../actions/quiz";
import ButtonCreateQuiz from "../ButtonCreateQuiz/ButtonCreateQuiz";
import QuizCard from "./QuizCard/QuizCard.js";

export default function () {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quiz);
  const filter = useSelector((state) => state.quizSearch);
  const [AllQuizzes, setAllQuizzes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    dispatch(findAllQuizzes());
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  useEffect(() => {
    if (quizzes) {
      const filteredQuizzes = quizzes.filter((quiz) => {
        if (!user && !quiz.public) return false;
        return quiz.title.toLowerCase().includes(filter.toLowerCase());
      });
      setAllQuizzes(filteredQuizzes);
    }
  }, [filter, quizzes, user]);

  return !AllQuizzes.length ? (
    <Typography></Typography>
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

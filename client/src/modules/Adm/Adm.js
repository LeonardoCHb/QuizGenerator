import { Paper, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUsers, getUsersResponses } from "../../actions/adm";
import { quizAllQuestions } from "../../actions/quiz";
import Table from "./components/Table/Table";
import styles from "./styles.js";

const useStyles = styles;

const Adm = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.getUsers);
  const usersResponses = useSelector((state) => state.getUsersResponses);
  const userQuizzes = useSelector((state) => state.quizAllQuestions);
  const classes = useStyles();
  const [newUsers, setNewUsers] = useState([]);

  const responses = (id) => {
    let filtered = [];
    if (userQuizzes) {
      filtered = usersResponses.filter((userRes) => {
        return userRes.answeredBy === id;
      });
    }
    return filtered;
  };
  // fetch all quizzes
  const quizzes = (id) => {
    let filtered = [];
    if (userQuizzes) {
      filtered = userQuizzes.filter((userQuiz) => {
        return userQuiz.creator === id;
      });
    }
    return filtered;
  };

  useEffect(() => {
    let userTableData = [];
    if (users) {
      userTableData = users.map((user) => ({
        id: user._id,
        email: user.email,
        name: user.name,
        QtdQuizzes: quizzes(user._id).length,
        QtdResponses: responses(user._id).length,
        quizResponses: responses(user._id),
        quizCreated: quizzes(user._id),
      }));
      setNewUsers(userTableData);
    }
  }, [users, usersResponses, userQuizzes]);

  useEffect(() => {
    dispatch(quizAllQuestions());
    dispatch(getUsers());
    dispatch(getUsersResponses());
  }, []);

  return (
    <form>
      <Container
        className={classes.TableContainer}
        component="main"
        maxWidth="md"
      >
        <Paper>
          <Table autoPageSize="true" users={newUsers} />
        </Paper>
      </Container>
    </form>
  );
};

export default {
  routeProps: {
    path: "/adm",
    component: Adm,
  },
  name: "Adm",
};

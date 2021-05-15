import { Paper, Container } from "@material-ui/core";
import React, { useEffect } from "react";
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
  // const userQuizzes = useSelector((state) => state.quizAllQuestions);
  const classes = useStyles();
  // const [newUsers, setNewUsers] = setState({});

  console.log(users);

  const responses = (id) => {
    return usersResponses.filter((userRes) => {
      return userRes.answeredBy === id;
    });
  };

  console.log(responses("608cce84d339170cd8ec9894"));

  useEffect(() => {
    dispatch(quizAllQuestions());
    dispatch(getUsers());
    dispatch(getUsersResponses());
  }, []);

  /*  useEffect(() => {
  }, {});
 */
  return (
    <form>
      <Container
        className={classes.TableContainer}
        component="main"
        maxWidth="md"
      >
        <Paper>
          <Table autoPageSize="true" users={users} />
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

import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import "moment/locale/pt-br";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { findOne } from "../../actions/quiz";
import CheckboxQuestion from "../../components/TypeQuestionsToResponses/Checkbox";
import RadioQuestion from "../../components/TypeQuestionsToResponses/Choice";
import TextQuestion from "../../components/TypeQuestionsToResponses/Text";
import styles from "./styles.js";

const useStyles = styles;

const ReplyQuiz = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const { id } = useParams();
  const quiz = useSelector((state) => state.quiz[0]);

  useEffect(() => {
    dispatch(findOne(id));
  }, []);

  if (quiz?.public === false) {
    if (!user?.result?.name) {
      return (
        <Paper className={classes.paper}>
          <Typography variant="h6" align="center">
            Voce precisa estar logado para responder a este questionario.
          </Typography>
        </Paper>
      );
    }
  }

  return !quiz ? (
    <CircularProgress />
  ) : (
    <form>
      <Container component="main" maxWidth="md">
        <Paper className={`${classes.paper} ${classes.form}`}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography gutterBottom variant="h3" align="center">
                {quiz.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom variant="h4" align="left">
                {quiz.description}
              </Typography>
              <Typography gutterBottom variant="h6" align="left">
                {quiz.public
                  ? "Questionário público."
                  : "Apenas usuários logados podem responder."}
              </Typography>
              <Typography gutterBottom variant="h6" align="left">
                Questionário criado {moment(quiz.createdAt).fromNow()}.
              </Typography>
              <Typography gutterBottom variant="h6" align="left">
                Criado por {quiz.name}.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {quiz.questions.map((question, index) => {
                switch (question.typeQuestion) {
                  case 1:
                    return (
                      <CheckboxQuestion
                        key={index}
                        id={index}
                        question={question}
                      />
                    );
                  case 2:
                    return (
                      <RadioQuestion
                        key={index}
                        id={index}
                        question={question}
                      />
                    );
                  case 3:
                    return (
                      <TextQuestion
                        key={index}
                        id={index}
                        question={question}
                      />
                    );
                  default:
                    return "";
                }
              })}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ENVIAR RESPOSTA
          </Button>
        </Paper>
      </Container>
    </form>
  );
};

export default ReplyQuiz;

// estilização
import {
  Paper,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
// bibliotecas
import moment from "moment";
import "moment/locale/pt-br";
// react
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

// components
import { responseToQuiz, findOne, findOneResponse } from "../../actions/quiz";
import CheckboxQuestion from "./components/TypeQuestions/Checkbox";
import RadioQuestion from "./components/TypeQuestions/Choice";
import TextQuestion from "./components/TypeQuestions/Text.js";
import styles from "./styles.js";

const useStyles = styles;

const ReplyQuiz = () => {
  const { addToast } = useToasts();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const quiz = useSelector((state) => state.quizToResponse[0]);
  const previousRes = useSelector((state) => state.quizResponse[0]);
  const [responseSaved, setResponseSaved] = useState(null);
  const [finalResponse, setFinalResponse] = useState({});
  const [responses, setResponses] = useState([]);

  console.log(previousRes);
  console.log(finalResponse);

  useEffect(() => {
    if (previousRes) {
      if (!previousRes?.sent) {
        setResponseSaved(previousRes?.responses);
        setFinalResponse({ ...finalResponse, _id: previousRes?._id });
      }
    }
  }, [previousRes]);

  useEffect(() => {
    dispatch(findOne(id));
  }, []);

  useEffect(() => {
    if (quiz) {
      const responsesArr = Array(quiz.questions.length).fill(null);
      setResponses(responsesArr);
    }
  }, [quiz]);

  useEffect(() => {
    const newResponse = {};
    newResponse.quiz = quiz?._id;
    newResponse.creator = quiz?.creator;
    newResponse.quizTitle = quiz?.title;
    newResponse.sent = false;
    if (user) {
      const isCustomAuth = user?.token.length < 500;
      if (isCustomAuth) newResponse.answeredBy = user?.result?._id;
      else newResponse.answeredBy = user?.result?.googleId;
      if (quiz) dispatch(findOneResponse(quiz?._id));
      newResponse.name = user?.result?.name;
    } else {
      newResponse.answeredBy = "undefined";
      newResponse.name = "anonimo";
    }
    setFinalResponse({ ...newResponse });
  }, [quiz]);

  const handleResponse = (response, index) => {
    const newResponses = responses;
    newResponses[parseInt(index)] = response;
    setResponses(newResponses);
    setFinalResponse({ ...finalResponse, responses: responses });
  };

  const handlePartialSave = async (e) => {
    dispatch(responseToQuiz({ ...finalResponse }));
    addToast("Resposta salva.", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const handleSubmit = async (e) => {
    dispatch(responseToQuiz({ ...finalResponse, sent: true }));
    history.push("/");
    addToast("Resposta enviada.", {
      appearance: "success",
      autoDismiss: true,
    });
  };

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

  if (user && previousRes?.sent) {
    return (
      <Paper className={classes.paper}>
        <Container maxWidth="md" variant="h6" align="center">
          Voce já respondeu esse questionário.
        </Container>
      </Paper>
    );
  }

  return !quiz ? (
    <CircularProgress />
  ) : (
    <Container component="main" maxWidth="md">
      <Paper className={`${classes.paper} ${classes.form}`}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h3" align="center">
              {quiz.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h4" align="center">
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
                      myResponses={handleResponse}
                      response={responseSaved ? responseSaved[index] : null}
                    />
                  );
                case 2:
                  return (
                    <RadioQuestion
                      key={index}
                      id={index}
                      question={question}
                      myResponses={handleResponse}
                      responseC={responseSaved ? responseSaved[index] : null}
                    />
                  );
                case 3:
                  return (
                    <TextQuestion
                      key={index}
                      id={index}
                      question={question}
                      myResponses={handleResponse}
                      responseT={responseSaved ? responseSaved[index] : null}
                    />
                  );
                default:
                  return "";
              }
            })}
          </Grid>
        </Grid>
        <Container className={classes.cardActions}>
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ENVIAR RESPOSTA
          </Button>
          {user?.result?.name ? (
            <Button
              onClick={handlePartialSave}
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              SALVAR
            </Button>
          ) : (
            ""
          )}
        </Container>
      </Paper>
    </Container>
  );
};

export default {
  routeProps: {
    path: "/quiz/reply/:id",
    component: ReplyQuiz,
  },
  name: "ReplyQuiz",
};

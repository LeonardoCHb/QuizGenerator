// estilização
import {
  Paper,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
// react
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";

// components
import { createQuiz } from "../../actions/quiz";
import Alert from "./components/Alert/Alert";
import SwipeQuestions from "./components/SelectQuestion/SwipeQuestions";
import styles from "./styles.js";

const useStyles = styles;

const initialQuiz = {
  title: "",
  description: "",
  public: false,
  questions: [],
};

const CreateQuiz = () => {
  const { addToast } = useToasts();
  const [quizData, setQuizData] = useState(initialQuiz);
  const [wasSend, setWasSend] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(!error);
  };

  const handleWasSend = () => {
    setWasSend(!wasSend);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      quizData.title.length === 0 ||
      quizData.description.length === 0 ||
      quizData.questions.length === 0
    ) {
      handleError();
      return;
    }
    dispatch(createQuiz({ ...quizData, name: user?.result?.name }));
    setQuizData({ ...initialQuiz });
    handleWasSend();
    addToast("Questionário criado.", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const handleQuestion = (currentQuestions) => {
    const list = [];
    for (const question in currentQuestions) {
      list.push(currentQuestions[question]);
    }
    setQuizData({ ...quizData, questions: list });
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Voce precisa estar logado para criar um questionario.
        </Typography>
      </Paper>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Alert
        text="Título ou descrição não preenchidos. O questionário deve conter pelo menos uma questão."
        error={error}
        handleError={handleError}
      />
      <Container component="main" maxWidth="md">
        <Paper className={`${classes.paper} ${classes.form}`}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="title"
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                fullWidth
                label="Titulo do meu questionario"
                value={quizData.title}
                onChange={(e) =>
                  setQuizData({ ...quizData, title: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                fullWidth
                label="Descricao"
                value={quizData.description}
                onChange={(e) =>
                  setQuizData({ ...quizData, description: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Box>
                <SwipeQuestions
                  handleQuestion={handleQuestion}
                  wasSend={wasSend}
                  handleWasSend={handleWasSend}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={quizData.public}
                    name="public"
                    onChange={(e) =>
                      setQuizData({ ...quizData, public: e.target.checked })
                    }
                    color="primary"
                  />
                }
                label="Quero que este questionário seja visível para pessoas anonimas(que não possuem conta neste site)."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            CRIAR
          </Button>
        </Paper>
      </Container>
    </form>
  );
};

export default {
  routeProps: {
    path: "/quiz/create",
    component: CreateQuiz,
  },
  name: "CreateQuiz",
};

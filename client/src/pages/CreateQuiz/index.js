import { Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createQuiz } from "../../actions/quiz";
import SelectTypeQuestion from "../../components/SelectQuestion/SelectQuestion";
import styles from "./styles.js";

const useStyles = styles;

const initialQuiz = {
  title: "",
  description: "",
  public: false,
  questions: [],
};

const questionModel = {
  typeQuestion: null,
  hasResponse: false,
  question: {
    wording: null,
    options: null,
    response: null,
  },
};

const CreateQuiz = () => {
  const [quizData, setQuizData] = useState(initialQuiz);
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(quizData);
    console.log(user?.result?.name);
    dispatch(createQuiz({ ...quizData, name: user?.result?.name }));
  };

  const handleQuestion = (question) => {
    const copyQuestions = quizData.questions;

    setQuizData({ ...quizData, questions: [copyQuestions, question] });
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
    <Container component="main" maxWidth="md">
      <Paper>
        <div className={classes.paper}>
          <form
            autoComplete="off"
            className={classes.form}
            noValidate
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                  required
                  fullWidth
                  label="Titulo Do Meu Questionario"
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
                  multiline="true"
                  label="Descricao"
                  value={quizData.description}
                  onChange={(e) =>
                    setQuizData({ ...quizData, description: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <SelectTypeQuestion
                    handleQuestion={handleQuestion}
                    initialQuestion={questionModel}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
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
          </form>
        </div>
      </Paper>
    </Container>
  );
};

export default CreateQuiz;

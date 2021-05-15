import { Paper, Container, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import CheckboxQuestion from "../TypeQuestions/Checkbox";
import RadioQuestion from "../TypeQuestions/Choice";
import TextQuestion from "../TypeQuestions/Text.js";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  subtitle: {
    marginTop: theme.spacing(2),
  },
  paper: {
    marginBottom: theme.spacing(4),
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
    background: "#468faf",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      background: "#468faf",
    },
    back: {
      background: "#468faf",
    },
  },
}));

export default function ({ response, quiz }) {
  const classes = useStyles();
  const [responseSaved, setResponseSaved] = useState(null);

  useEffect(() => {
    if (response) {
      setResponseSaved(response.responses);
    }
  }, [response]);

  return (
    <Container maxWidth="md" style={{ display: "flex", flexWrap: "wrap" }}>
      <Paper className={`${classes.paper} ${classes.form}`}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {quiz.questions.map((question, index) => {
            switch (question.typeQuestion) {
              case 1:
                return (
                  <CheckboxQuestion
                    key={index}
                    question={question}
                    response={responseSaved ? responseSaved[index] : null}
                  />
                );
              case 2:
                return (
                  <RadioQuestion
                    key={index}
                    question={question}
                    responseC={responseSaved ? responseSaved[index] : null}
                  />
                );
              case 3:
                return (
                  <TextQuestion
                    key={index}
                    question={question}
                    responseT={responseSaved ? responseSaved[index] : null}
                  />
                );
              default:
                return "";
            }
          })}
        </Grid>
      </Paper>
    </Container>
  );
}

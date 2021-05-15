import {
  Typography,
  Paper,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
  },
  form: {
    display: "block",
    flexWrap: "wrap",
  },
}));

export default function ({ question, response }) {
  const classes = useStyles();
  const [responses, setResponses] = useState({
    option0: false,
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  useEffect(() => {
    if (response) {
      const obj = {};
      question.options.forEach((option, index) => {
        obj[`option${index}`] = response[index];
      });
      setResponses(obj);
    }
  }, [response]);

  return (
    <Paper className={`${classes.paper} ${classes.root} ${classes.form}`}>
      <Typography variant="h5">{question.wording}</Typography>
      <FormGroup>
        {question.options.map((option, index) => {
          return (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={responses ? responses[`option${index}`] : null}
                  color="primary"
                  name={`option${index}`}
                />
              }
              label={option}
            />
          );
        })}
      </FormGroup>
      {question.hasResponse ? (
        <React.Fragment>
          <Typography variant="h6">Resposta correta:</Typography>
          <FormGroup row>
            {question.response.map((response, index) => {
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={response}
                      color="primary"
                      name={`option${index}`}
                    />
                  }
                  label={`Opção ${index}`}
                />
              );
            })}
          </FormGroup>
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </Paper>
  );
}

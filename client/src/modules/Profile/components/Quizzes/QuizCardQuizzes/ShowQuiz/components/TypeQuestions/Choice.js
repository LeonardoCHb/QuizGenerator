import {
  Typography,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";

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

export default function ({ question, responseC }) {
  const classes = useStyles();
  const [response, setResponse] = useState("undefined");

  useEffect(() => {
    if (responseC) {
      setResponse(responseC);
    }
  }, [responseC]);

  return (
    <Paper className={`${classes.paper} ${classes.root} ${classes.form}`}>
      <Typography variant="h5">{question.wording}</Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="options" name="options" value={`${response}`}>
          {question.options.map((option, index) => {
            return (
              <FormControlLabel
                key={index}
                value={`${index}`}
                control={<Radio color="primary" />}
                label={option}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      {question.hasResponse ? (
        <React.Fragment>
          <Typography variant="h6">Resposta correta:</Typography>
          <Typography variant="body1">
            {question.options[parseInt(question.response)]}
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </Paper>
  );
}

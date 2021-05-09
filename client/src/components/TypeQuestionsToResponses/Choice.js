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
    marginTop: theme.spacing(4),
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
  },
  form: {
    display: "block",
    flexWrap: "wrap",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  text: {
    marginLeft: "0.5rem",
  },
}));

export default function ({ question, id, myResponses }) {
  const classes = useStyles();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    myResponses(response, id);
  }, [response]);

  const handleChange = (event) => {
    const index = event.target.value;
    setResponse(index);
  };

  return (
    <Paper className={`${classes.paper} ${classes.root} ${classes.form}`}>
      <Typography variant="h5">{question.wording}</Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="options"
          name="options"
          value={`${response}`}
          onClick={handleChange}
        >
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
    </Paper>
  );
}

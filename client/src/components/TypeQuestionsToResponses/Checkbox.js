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

export default function ({ question }) {
  const classes = useStyles();
  const [responses, setResponses] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [finalResponse, setFinalResponse] = useState([]);

  const handleFinalResponse = () => {
    const auxResponses = [];
    for (const response in responses) {
      auxResponses.push(responses[response]);
    }
    setFinalResponse(auxResponses);
  };

  useEffect(handleFinalResponse, [responses]);

  useEffect(() => {
    const obj = {};
    question.options.forEach((option, index) => {
      obj[`option${index}`] = false;
    });
    setResponses(obj);
  }, [question]);

  const handleChange = (event) => {
    setResponses({ ...responses, [event.target.name]: event.target.checked });
  };

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
                  checked={responses[`option${index}`]}
                  color="primary"
                  onChange={handleChange}
                  name={`option${index}`}
                />
              }
              label={option}
            />
          );
        })}
      </FormGroup>
    </Paper>
  );
}

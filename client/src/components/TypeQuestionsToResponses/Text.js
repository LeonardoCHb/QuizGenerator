import { Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  text: {
    marginLeft: "0.5rem",
  },
}));

export default ({ question, id, myResponses }) => {
  const [response, setResponse] = useState("");
  const classes = useStyles();

  useEffect(() => {
    myResponses(response, id);
  }, [response]);

  const handleResponse = (e) => {
    setResponse(e.target.value);
  };

  return (
    <Paper className={`${classes.paper} ${classes.root} ${classes.form}`}>
      <Typography variant="h5">{question.wording}</Typography>
      <TextField
        value={response}
        name="response"
        onChange={handleResponse}
        variant="outlined"
        fullWidth
        label="Resposta"
      />
    </Paper>
  );
};

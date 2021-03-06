import { Paper, Typography } from "@material-ui/core";
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
    marginBottom: theme.spacing(2),
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
  },
  text: {
    marginLeft: "0.5rem",
  },
}));

export default ({ question, responseT }) => {
  const [response, setResponse] = useState("");
  const classes = useStyles();

  useEffect(() => {
    if (responseT?.length !== 0) {
      setResponse(responseT);
    }
  }, [responseT]);

  return (
    <Paper className={`${classes.paper} ${classes.root} ${classes.form}`}>
      <Typography variant="h5">{question.wording}</Typography>
      <Typography variant="overline" align="center">
        {response}
      </Typography>
      {question.hasResponse ? (
        <React.Fragment>
          <Typography variant="h6">Resposta correta:</Typography>
          <Typography variant="body1">{question.response}</Typography>
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </Paper>
  );
};

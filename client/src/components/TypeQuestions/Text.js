import {
  Checkbox,
  Paper,
  TextField,
  Typography,
  FormControlLabel,
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
  },
  text: {
    marginLeft: "0.5rem",
  },
}));

export default ({ questionText }) => {
  const [wording, setWording] = useState(null);
  const [response, setResponse] = useState(null);
  const [hasResponse, setHasResponse] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    questionText(wording, null, hasResponse, response);
  }, [wording, response, hasResponse]);

  const switchMode = () => {
    setHasResponse(!hasResponse);
    setResponse(null);
  };

  const handleWording = (e) => {
    setWording(e.target.value);
  };

  const handleResponse = (e) => {
    setResponse(e.target.value);
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
      >
        <Typography variant="h6" className={classes.text}>
          Nesse tipo de questão as respostas são em formato de texto.
        </Typography>
        <TextField
          name="wording"
          onChange={handleWording}
          variant="outlined"
          required
          fullWidth
          label="Enunciado"
          autoFocus
        />
        {hasResponse ? (
          <TextField
            name="response"
            onChange={handleResponse}
            variant="outlined"
            required
            fullWidth
            label="Resposta"
            autoFocus
          />
        ) : (
          ""
        )}
        <FormControlLabel
          control={
            <Checkbox
              checked={hasResponse}
              onChange={switchMode}
              name="hasResponse"
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          }
          label={
            hasResponse
              ? "Escreva sua resposta."
              : "Clique aqui para adicionar resposta."
          }
          labelPlacement="end"
        />
      </form>
    </Paper>
  );
};

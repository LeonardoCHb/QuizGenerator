import { TextField, Typography, Paper, Switch } from "@material-ui/core";
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
    display: "flex",
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

export default function RadioButtonsGroup({ questionChoice }) {
  const classes = useStyles();
  const [options, setOptions] = useState(["", "", "", "", ""]);
  const [wording, setWording] = useState(null);
  const [hasResponse, setHasResponse] = useState(false);
  // const [response, setResponse] = useState(null);
  const [finalOptions, setFinalOptions] = useState([]);
  const handleSubmit = () => {};

  const hasText = (option) => {
    return option.length;
  };

  useEffect(() => {
    questionChoice(wording, finalOptions, hasResponse, null);
  }, [wording, finalOptions, hasResponse]);

  const handleWording = (newWording) => {
    setWording(newWording);
  };

  const handleOptions = (newOptions) => {
    setOptions(newOptions);
    setFinalOptions(options.filter(hasText));
  };

  const handleHasResponse = () => {
    setHasResponse(!hasResponse);
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" className={classes.text}>
          Nesse tipo de questão pode ser selecionado apenas uma resposta.
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Enunciado"
          fullWidth
          multiline
          onChange={(e) => {
            const newWording = e.target.value;
            handleWording(newWording);
          }}
        />
        <Typography variant="text" className={classes.text}>
          Preencha apenas a quantidade de opções que você queira.
        </Typography>
        <TextField
          name="1"
          variant="outlined"
          label="Opção 1"
          fullWidth
          multiline
          onChange={(e) => {
            const copyOptions = options;
            copyOptions[0] = e.target.value;
            handleOptions(copyOptions);
          }}
        />
        <TextField
          name="2"
          variant="outlined"
          label="Opção 2"
          fullWidth
          multiline
          onChange={(e) => {
            const copyOptions = options;
            copyOptions[1] = e.target.value;
            handleOptions(copyOptions);
          }}
        />
        <TextField
          name="3"
          variant="outlined"
          label="Opção 3"
          fullWidth
          multiline
          onChange={(e) => {
            const copyOptions = options;
            copyOptions[2] = e.target.value;
            handleOptions(copyOptions);
          }}
        />
        <TextField
          name="4"
          variant="outlined"
          label="Opção 4"
          fullWidth
          multiline
          onChange={(e) => {
            const copyOptions = options;
            copyOptions[3] = e.target.value;
            handleOptions(copyOptions);
          }}
        />
        <TextField
          name="5"
          variant="outlined"
          label="Opção 5"
          fullWidth
          multiline
          onChange={(e) => {
            const copyOptions = options;
            copyOptions[4] = e.target.value;
            handleOptions(copyOptions);
          }}
        />
        <Switch
          checked={hasResponse}
          onChange={handleHasResponse}
          name="hasResponse"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        {hasResponse
          ? "Qual a resposta correta?"
          : "Marque aqui caso a questão tenha resposta"}
      </form>
    </Paper>
  );
}

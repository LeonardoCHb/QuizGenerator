import {
  TextField,
  Typography,
  Paper,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
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

export default function ({
  questionChoice,
  erase,
  eraseQuestionForm,
  editing,
  questionToEdit,
  questionEditedChange,
}) {
  const classes = useStyles();
  const [options, setOptions] = useState(["", "", "", "", ""]);
  const [wording, setWording] = useState("");
  const [finalOptions, setFinalOptions] = useState([]);
  const [hasResponse, setHasResponse] = useState(false);
  const [response, setResponse] = useState(null);
  const [finalResponse, setFinalResponse] = useState(null);

  useEffect(() => {
    if (editing === true) {
      const optionsToEdit = ["", "", "", "", ""];
      handleWording(questionToEdit.wording);
      questionToEdit.options.forEach((option, index) => {
        optionsToEdit[index] = option;
      });
      setHasResponse(questionToEdit.hasResponse);
      setOptions(optionsToEdit);
      setResponse(questionToEdit.response);
      setFinalOptions(questionToEdit.options);
      setFinalResponse(questionToEdit.response);
    }
  }, [editing]);

  const handleChange = (event) => {
    const index = event.target.value;
    if (hasResponse === false) {
      setResponse(null);
      setFinalResponse(null);
      return;
    }
    setResponse(index);
    setFinalResponse(finalOptions.indexOf(options[parseInt(index)]));
  };

  const hasText = (option) => {
    return option.length;
  };

  useEffect(() => {
    if (editing === false) {
      questionChoice(wording, finalOptions, hasResponse, finalResponse, 2);
    } else {
      const name = questionToEdit.name;
      questionEditedChange(
        name,
        wording,
        finalOptions,
        hasResponse,
        finalResponse,
        2
      );
    }
  }, [wording, finalOptions, hasResponse, finalResponse]);

  useEffect(() => {
    if (erase) {
      setWording("");
      setOptions(["", "", "", "", ""]);
      setFinalOptions([]);
      setHasResponse(false);
      setResponse(null);
      setFinalResponse(null);
      eraseQuestionForm();
    }
  }, [erase]);

  const handleWording = (newWording) => {
    setWording(newWording);
  };

  const handleOptions = (newOptions) => {
    setOptions(newOptions);
    setFinalOptions(options.filter(hasText));
    setResponse(null);
    setFinalResponse(null);
  };

  const handleHasResponse = () => {
    setHasResponse(!hasResponse);
    setResponse(null);
    setFinalResponse(null);
  };

  return (
    <Paper className={`${classes.paper} ${classes.root} ${classes.form}`}>
      <Typography variant="h6" className={classes.text}>
        Nesse tipo de questão pode ser selecionado apenas uma resposta.
      </Typography>
      <TextField
        value={wording}
        name="title"
        variant="outlined"
        label="Enunciado"
        fullWidth
        onChange={(e) => {
          const newWording = e.target.value;
          handleWording(newWording);
        }}
        autoFocus
      />
      <TextField
        value={options[0]}
        name="1"
        variant="filled"
        label="Opção 1"
        fullWidth
        onChange={(e) => {
          const copyOptions = options;
          copyOptions[0] = e.target.value;
          handleOptions(copyOptions);
        }}
      />
      <TextField
        value={options[1]}
        name="2"
        variant="filled"
        label="Opção 2"
        fullWidth
        onChange={(e) => {
          const copyOptions = options;
          copyOptions[1] = e.target.value;
          handleOptions(copyOptions);
        }}
      />
      <TextField
        value={options[2]}
        name="3"
        variant="filled"
        label="Opção 3"
        fullWidth
        onChange={(e) => {
          const copyOptions = options;
          copyOptions[2] = e.target.value;
          handleOptions(copyOptions);
        }}
      />
      <TextField
        value={options[3]}
        name="4"
        variant="filled"
        label="Opção 4"
        fullWidth
        onChange={(e) => {
          const copyOptions = options;
          copyOptions[3] = e.target.value;
          handleOptions(copyOptions);
        }}
      />
      <TextField
        value={options[4]}
        name="5"
        variant="filled"
        label="Opção 5"
        fullWidth
        onChange={(e) => {
          const copyOptions = options;
          copyOptions[4] = e.target.value;
          handleOptions(copyOptions);
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={hasResponse}
            onChange={handleHasResponse}
            name="hasResponse"
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label={hasResponse ? "" : "Clique aqui para adicionar resposta."}
        labelPlacement="end"
      />
      {hasResponse ? (
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="options"
            name="options"
            value={`${response}`}
            onChange={handleChange}
          >
            <FormControlLabel
              value={options[0].length ? "0" : "disabled"}
              disabled={!options[0].length}
              control={<Radio color="primary" />}
              label="Opção 1"
            />
            <FormControlLabel
              value={options[1].length ? "1" : "disabled"}
              disabled={!options[1].length}
              control={<Radio color="primary" />}
              label="Opção 2"
            />
            <FormControlLabel
              value={options[2].length ? "2" : "disabled"}
              disabled={!options[2].length}
              control={<Radio color="primary" />}
              label="Opção 3"
            />
            <FormControlLabel
              value={options[3].length ? "3" : "disabled"}
              disabled={!options[3].length}
              control={<Radio color="primary" />}
              label="Opção 4"
            />
            <FormControlLabel
              value={options[4].length ? "4" : "disabled"}
              disabled={!options[4].length}
              control={<Radio color="primary" />}
              label="Opção 5"
            />
          </RadioGroup>
        </FormControl>
      ) : (
        ""
      )}
    </Paper>
  );
}

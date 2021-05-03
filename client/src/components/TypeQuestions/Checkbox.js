import {
  TextField,
  Typography,
  Paper,
  Checkbox,
  FormGroup,
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

export default function CheckboxLabels({ questionCheckbox }) {
  const classes = useStyles();
  const [options, setOptions] = useState(["", "", "", "", ""]);
  const [wording, setWording] = useState(null);
  const [finalOptions, setFinalOptions] = useState([]);
  const [hasResponse, setHasResponse] = useState(false);
  const [responses, setResponses] = useState({
    box0: null,
    box1: null,
    box2: null,
    box3: null,
    box4: null,
  });

  const hasText = (option) => {
    return option.length;
  };

  useEffect(() => {
    questionCheckbox(wording, finalOptions, hasResponse, responses);
  }, [wording, finalOptions, hasResponse, responses]);

  const handleWording = (newWording) => {
    setWording(newWording);
  };

  const handleOptions = (newOptions) => {
    setOptions(newOptions);
    setFinalOptions(options.filter(hasText));

    const auxResponses = { ...responses };
    options.forEach((option, index) => {
      if (hasText(option)) auxResponses[`box${index}`] = false;
      else auxResponses[`box${index}`] = null;
    });
    setResponses({ ...auxResponses });
  };

  const handleHasResponse = () => {
    setHasResponse(!hasResponse);
    const auxResponses = { ...responses };
    options.forEach((option, index) => {
      if (hasText(option)) auxResponses[`box${index}`] = false;
      else auxResponses[`box${index}`] = null;
    });
    setResponses({ ...auxResponses });
  };

  const handleResponses = (e) => {
    setResponses({ ...responses, [e.target.name]: e.target.checked });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
      >
        <Typography variant="h6" className={classes.text}>
          Nesse tipo de questão pode ser selecionado multiplas respostas.
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
          autoFocus
        />
        <TextField
          name="1"
          variant="filled"
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
          variant="filled"
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
          variant="filled"
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
          variant="filled"
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
          variant="filled"
          label="Opção 5"
          fullWidth
          multiline
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
            <FormGroup row>
              <FormControlLabel
                value={options[0].length ? "0" : "disabled"}
                disabled={!options[0].length}
                control={
                  <Checkbox
                    checked={responses.box0}
                    name="box0"
                    color="primary"
                    onChange={handleResponses}
                  />
                }
                label="Opção 1"
              />
              <FormControlLabel
                value={options[1].length ? "1" : "disabled"}
                disabled={!options[1].length}
                control={
                  <Checkbox
                    checked={responses.box1}
                    name="box1"
                    color="primary"
                    onChange={handleResponses}
                  />
                }
                label="Opção 2"
              />
              <FormControlLabel
                value={options[2].length ? "2" : "disabled"}
                disabled={!options[2].length}
                control={
                  <Checkbox
                    checked={responses.box2}
                    name="box2"
                    color="primary"
                    onChange={handleResponses}
                  />
                }
                label="Opção 3"
              />
              <FormControlLabel
                disabled={!options[3].length}
                value={options[3].length ? "3" : "disabled"}
                control={
                  <Checkbox
                    checked={responses.box3}
                    name="box3"
                    color="primary"
                    onChange={handleResponses}
                  />
                }
                label="Opção 4"
              />
              <FormControlLabel
                value={options[4].length ? "4" : "disabled"}
                disabled={!options[4].length}
                control={
                  <Checkbox
                    checked={responses.box4}
                    name="box4"
                    color="primary"
                    onChange={handleResponses}
                  />
                }
                label="Opção 5"
              />
            </FormGroup>
          </FormControl>
        ) : (
          ""
        )}
      </form>
    </Paper>
  );
}

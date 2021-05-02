import {
  TextField,
  Typography,
  Paper,
  Switch,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
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
  SwitchGreen: {
    color: theme.palette.common.white,
    backgroundColor: green.A400,
  },
}));

export default function CheckboxLabels({ questionCheckbox }) {
  const classes = useStyles();
  const [options, setOptions] = useState(["", "", "", "", ""]);
  const [wording, setWording] = useState(null);
  const [finalOptions, setFinalOptions] = useState([]);
  const [hasResponse, setHasResponse] = useState(false);
  const [response, setResponse] = useState({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const [finalResponse, setFinalResponse] = useState({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const handleChange = (responses) => {
    if (hasResponse === false) {
      setResponse({ 0: null, 1: null, 2: null, 3: null, 4: null });
      setFinalResponse({ 0: null, 1: null, 2: null, 3: null, 4: null });
      return;
    }
    setResponse(responses);
    setFinalResponse(responses);
  };

  const hasText = (option) => {
    return option.length;
  };

  useEffect(() => {
    questionCheckbox(wording, finalOptions, hasResponse, finalResponse);
  }, [wording, finalOptions, hasResponse, finalResponse]);

  const handleWording = (newWording) => {
    setWording(newWording);
  };

  const handleOptions = (newOptions) => {
    setOptions(newOptions);
    setFinalOptions(options.filter(hasText));
  };

  const handleHasResponse = () => {
    setHasResponse(!hasResponse);
    setResponse({ 0: null, 1: null, 2: null, 3: null, 4: null });
    setFinalResponse({ 0: null, 1: null, 2: null, 3: null, 4: null });
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
        <Switch
          checked={hasResponse}
          onChange={handleHasResponse}
          name="hasResponse"
          className={classes.SwitchGreen}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        {hasResponse ? (
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="options"
              name="options"
              value={response}
              onChange={handleChange}
            >
              <FormControlLabel
                value={options[0].length ? "0" : "disabled"}
                disabled={!options[0].length}
                control={<Checkbox name="0" color="primary" />}
                label="Opção 1"
              />
              <FormControlLabel
                value={options[1].length ? "1" : "disabled"}
                disabled={!options[1].length}
                control={<Checkbox name="1" color="primary" />}
                label="Opção 2"
              />
              <FormControlLabel
                value={options[2].length ? "2" : "disabled"}
                disabled={!options[2].length}
                control={<Checkbox name="2" color="primary" />}
                label="Opção 3"
              />
              <FormControlLabel
                value={options[3].length ? "3" : "disabled"}
                disabled={!options[3].length}
                control={<Checkbox name="3" color="primary" />}
                label="Opção 4"
              />
              <FormControlLabel
                value={options[4].length ? "4" : "disabled"}
                disabled={!options[4].length}
                control={<Checkbox name="4" color="primary" />}
                label="Opção 5"
              />
            </RadioGroup>
          </FormControl>
        ) : (
          <div>
            <p>Tem Gabarito?</p>
          </div>
        )}
      </form>
    </Paper>
  );
}

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

const CheckBox = ({ checked, name }) => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return(
    <FormControlLabel
      control={<Checkbox
      color="primary"
      checked={checked}
      onChange={handleChange}
      name={name} />}
      label="Primary"
    />
  );
};

export default function ({ question }) {
  const classes = useStyles();
  const [wording, setWording] = useState("");
  const [options, setOptions] = useState(["", "", "", "", ""]);
  const [responses, setResponses] = useState(null);

  return (
    <Paper className={`${classes.paper} ${classes.root} ${classes.form}`}>
      <Typography>{question.wording}</Typography>
      <FormGroup>
      </FormGroup>
    </Paper>
  );
}

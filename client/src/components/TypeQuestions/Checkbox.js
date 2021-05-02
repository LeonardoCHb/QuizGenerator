import { RadioGroup } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "48rem",
    },
  },
}));
export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = useStyles();
  return (
    <FormGroup row>
      <FormLabel component="legend">
        <TextField
          className={classes.root}
          name="wording"
          id="outlined-basic"
          label="Descreva a Questão"
          variant="outlined"
          multiline="true"
        />
        <FormLabel component="legend">
          Obs: Marque as questões gabarito
        </FormLabel>
      </FormLabel>
      <RadioGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
          label={
            <TextField
              className={classes.root}
              id="1"
              fullWidth
              label="Descrição da opção"
              variant="filled"
              multiline="true"
            />
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
            />
          }
          label={
            <TextField
              className={classes.root}
              id="2"
              label="Descrição da opção"
              variant="filled"
              multiline="true"
            />
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
            />
          }
          label={
            <TextField
              className={classes.root}
              id="3"
              label="Descrição da opção"
              variant="filled"
              multiline="true"
            />
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedD}
              onChange={handleChange}
              name="checkedD"
            />
          }
          label={
            <TextField
              className={classes.root}
              id="4"
              label="Descrição da opção"
              variant="filled"
              multiline="true"
            />
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedE}
              onChange={handleChange}
              name="checkedE"
            />
          }
          label={
            <TextField
              className={classes.root}
              id="5"
              label="Descrição da opção"
              variant="filled"
              multiline="true"
            />
          }
        />
      </RadioGroup>
    </FormGroup>
  );
}

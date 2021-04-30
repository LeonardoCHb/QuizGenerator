import { RadioGroup } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "34rem",
    },
  },
}));
export default function TextLabels() {
  const classes = useStyles();
  return (
    <FormGroup row>
      <FormLabel component="legend">
        <TextField
          className={classes.root}
          name="wording"
          id="text"
          label="Descreva a Questão"
          variant="outlined"
          multiline="true"
        />
      </FormLabel>
      <FormLabel component="legend"> Obs: Escreva a resposta.</FormLabel>
      <RadioGroup>
        <TextField
          className={classes.root}
          id="1"
          label="Resposta"
          multiline="true"
        />
      </RadioGroup>
    </FormGroup>
  );
}

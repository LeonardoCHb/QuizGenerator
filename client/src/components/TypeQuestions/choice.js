import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState("0");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "33rem",
      },
    },
  }));
  const classes = useStyles();
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        <TextField
          className={classes.root}
          id="text"
          name="wording"
          label="Descreva a Questão"
          variant="outlined"
          multiline="true"
        />
      </FormLabel>
      <FormLabel component="legend">Obs: Marque a questão gabarito</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel // Primeira Opção da questão
          value="1"
          control={<Radio />}
          label={
            <TextField
              className={classes.root}
              id="1"
              label="Text of choice"
              variant="filled"
              multiline="true"
            />
          }
        />
        <FormControlLabel // segunda Opção da questão
          value="2"
          control={<Radio />}
          label={
            <TextField
              multiline="true"
              className={classes.root}
              id="filled-basic"
              label="Text of choice"
              variant="filled"
            />
          }
        />
        <FormControlLabel // terceira Opção da questão
          value="3"
          control={<Radio />}
          label={
            <TextField
              className={classes.root}
              id="filled-basic"
              label="Text of choice"
              variant="filled"
              multiline="true"
            />
          }
        />
        <FormControlLabel // Quarta Opção da questão
          value="4"
          control={<Radio />}
          label={
            <TextField
              className={classes.root}
              id="filled-basic"
              label="Text of choice"
              variant="filled"
              multiline="true"
            />
          }
        />
        <FormControlLabel // Quinta Opção da questão
          value="5"
          control={<Radio />}
          label={
            <TextField
              className={classes.root}
              id="filled-basic"
              label="Text of choice"
              variant="filled"
              multiline="true"
            />
          }
        />
      </RadioGroup>
    </FormControl>
  );
}

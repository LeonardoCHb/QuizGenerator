import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginLeft: "3rem",
    backgroundColor: "white",
    borderRadius: "5px",
  },
}));

export default function FreeSolo({ searchChange }) {
  const classes = useStyles();

  return (
    <div>
      <TextField
        className={classes.margin}
        label="Questionários"
        variant="filled"
        fullWidth
        onChange={(e) => searchChange(e.target.value)}
      />
    </div>
  );
}

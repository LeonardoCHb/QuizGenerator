// estilização
import { makeStyles, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// react
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
        size="small"
        label="Questionários"
        variant="filled"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e) => searchChange(e.target.value)}
      />
    </div>
  );
}

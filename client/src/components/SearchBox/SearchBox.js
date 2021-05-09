import { IconButton } from "@material-ui/core";
// import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(1),
    backgroundColor: "white",
    borderRadius: "5px",
    position: "absolute",
    top: "3%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default function FreeSolo({ searchChange }) {
  const classes = useStyles();

  return (
    <div>
      <TextField
        size="small"
        className={classes.margin}
        id="input-with-icon-textfield"
        placeholder="Pesquise seu Quiz aqui!"
        onChange={(e) => searchChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <IconButton position="start">
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}

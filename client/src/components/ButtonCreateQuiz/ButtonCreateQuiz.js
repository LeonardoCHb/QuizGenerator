import { Tooltip } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  CreateButton: {
    marginRight: "3rem",
    color: "#e5e5e5",
  },
}));

export default function ButtonCreateQuiz() {
  const classes = useStyles();

  return (
    <Grid className={classes.CreateButton}>
      <Tooltip
        title="Criar Questionario"
        placement="top-start"
        aria-label="add"
        arrow
      >
        <Fab
          component={Link}
          to={localStorage.getItem("profile") ? "/quiz/create" : "/auth"}
          aria-label="add"
        >
          <AddIcon color="primary" />
        </Fab>
      </Tooltip>
    </Grid>
  );
}

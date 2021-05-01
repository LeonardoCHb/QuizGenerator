import { Tooltip } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  CreateButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
}));

export default function ButtonCreateQuiz() {
  const classes = useStyles();

  return (
    <Grid className={classes.CreateButton} container item xs={13} spacing={20}>
      <Tooltip
        title="Criar Questionario"
        placement="top-start"
        aria-label="add"
        arrow
      >
        <Fab
          color="primary"
          component={Link}
          to={localStorage.getItem("profile") ? "/quiz/create" : "/auth"}
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </Grid>
  );
}

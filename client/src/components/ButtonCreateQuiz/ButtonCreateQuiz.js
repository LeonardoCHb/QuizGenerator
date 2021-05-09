import { Tooltip } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  CreateButton: {
    color: "#e5e5e5",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    justifyContent: "center",
  },
  AddIcon: {
    boxShadow:
      "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
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
          size="large"
          className={classes.AddIcon}
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

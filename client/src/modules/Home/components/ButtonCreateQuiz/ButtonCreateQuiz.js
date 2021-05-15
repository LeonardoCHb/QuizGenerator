// estilização
import { Tooltip, Container, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
// react
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  ContainerButton: {
    display: "flex",
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function () {
  const classes = useStyles();

  return (
    <Container className={classes.ContainerButton}>
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
    </Container>
  );
}

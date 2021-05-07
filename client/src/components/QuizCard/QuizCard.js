import { Button, Grid } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Paper from "@material-ui/core/Paper";
import React, { useState } from "react";
// import { Link } from "react-router-dom";

// react

import styles from "./QuizCardStyles";

const useStyles = styles;

export default function QuizCard({ quiz }) {
  const classes = useStyles();
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));

  return user || quiz.public === true ? (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <div className={classes.text}>
            <h2>{quiz.title}</h2>
            <p>{quiz.description}</p>
          </div>
          <CardActions className={classes.CotainerBottomButton}>
            <Button
              className={classes.BottomButton}
              size="small"
              color="primary"
            >
              COMPARTILHAR
            </Button>
            <Button
              className={classes.BottomButton}
              size="small"
              color="primary"
            >
              RESPONDER
            </Button>
          </CardActions>
        </Paper>
      </Grid>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <div></div>
      {/* <Grid item xs={4}>
        <Paper className={classes.paper}>
          <div className={classes.text}>
            <h2>Cadastre-se para ter acesso a esse quiz!</h2>
            <Button
              to="/auth"
              component={Link}
              className={classes.CreateButton}
              variant="contained"
              color="primary"
            >
              Cadastrar!
            </Button>
          </div>
        </Paper>
      </Grid> */}
    </React.Fragment>
  );
}

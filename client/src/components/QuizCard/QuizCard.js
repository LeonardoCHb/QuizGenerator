import { Button } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// react
import React from "react";

import styles from "./QuizCardStyles";

const useStyles = styles;

export default function FormRow({ quiz }) {
  console.log(quiz);
  const classes = useStyles();

  return (
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
  );
}

import { Button, Grid } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Paper from "@material-ui/core/Paper";
import CopyToClipboard from "@vigosan/react-copy-to-clipboard";
import React, { useState } from "react";

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
            <CopyToClipboard
              render={({ copy }) => (
                <Button
                  className={classes.BottomButton}
                  size="small"
                  color="primary"
                  variant="outlined"
                  onClick={() =>
                    copy(`http://localhost:3000/quiz/reply/${quiz._id}`)
                  }
                >
                  Compartilhar
                </Button>
              )}
            />
            <a
              className={classes.BottomButton}
              href={`/quiz/reply/${quiz._id}`}
            >
              <Button
                className={classes.BottomButton}
                size="small"
                color="primary"
                variant="outlined"
              >
                RESPONDER
              </Button>
            </a>
          </CardActions>
        </Paper>
      </Grid>
    </React.Fragment>
  ) : (
    <React.Fragment></React.Fragment>
  );
}

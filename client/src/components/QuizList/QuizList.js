import { Button } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import { palette } from "@material-ui/system";
import React from "react";

import styles from "./QuizListStyles";

const useStyles = styles;

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <a href="/">
            <div className="paperHover">
              <Paper className={classes.CreatePaper}>
                <h2>Criar Questionário</h2>
                <Button className={classes.PlusButton} bgcolor="success.main">
                  +
                </Button>
              </Paper>
            </div>
          </a>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div>
              <h2>Quiz</h2>
              <p>teste</p>
            </div>
            <CardActions>
              <Button
                className={classes.BottomButton}
                size="small"
                color="primary"
              >
                Share
              </Button>
              <Button
                className={classes.BottomButton}
                size="small"
                color="primary"
              >
                Learn More
              </Button>
            </CardActions>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div>
              <h2>Quiz</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                nostrum natus quibusdam obcaecati rerum animi est repudiandae
                earum, aperiam aspernatur incidunt tenetur dicta doloremque. Et
                est consequuntur soluta facere autem.
              </p>
            </div>
            <CardActions>
              <Button
                className={classes.BottomButton}
                size="small"
                color="primary"
              >
                Share
              </Button>
              <Button
                className={classes.BottomButton}
                size="small"
                color="primary"
              >
                Learn More
              </Button>
            </CardActions>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid container item xs={13} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

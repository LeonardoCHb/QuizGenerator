import { Button } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

import styles from "./QuizListStyles";

const useStyles = styles;

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div>
              <h2>Quiz</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A</p>
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
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div>
              <h2>Quiz</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                nostrum natus quibusdam obcaecati rerum animi est repudiandae
                earum, aperiam aspernatur incidunt tenetur dicta doloremque. Et
              </p>
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

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid
          className={classes.CreateButton}
          container
          item
          xs={13}
          spacing={20}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Grid>
        <Grid container item xs={13} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

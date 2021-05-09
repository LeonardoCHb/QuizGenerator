import { Button, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CopyToClipboard from "@vigosan/react-copy-to-clipboard";
import React from "react";

// react

import styles from "./QuizCardStyles";

const useStyles = styles;

export default function QuizCard({ quiz }) {
  const classes = useStyles();

  return quiz ? (
    <Grid item xs={12} sm={12} md={6}>
      <Card className={classes.details}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={classes.title}
              align="center"
            >
              {quiz.title.length < 37
                ? quiz.title
                : `${quiz.title.substring(0, 37)}...`}
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="p"
              className={classes.title}
              align="center"
            >
              {quiz.description.length < 50
                ? quiz.description
                : `${quiz.description.substring(0, 50)}...`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <CopyToClipboard
            render={({ copy }) => (
              <Button
                size="small"
                color="primary"
                onClick={() =>
                  copy(`http://localhost:3000/quiz/reply/${quiz._id}`)
                }
              >
                Compartilhar
              </Button>
            )}
          />
          <Button size="small" color="primary">
            Download
          </Button>
          <Button size="small" color="primary">
            Deletar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ) : (
    <React.Fragment></React.Fragment>
  );
}

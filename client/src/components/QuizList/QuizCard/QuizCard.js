import { Button, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CopyToClipboard from "@vigosan/react-copy-to-clipboard";
import React, { useState } from "react";

// react

import styles from "./QuizCardStyles";

const useStyles = styles;

export default function QuizCard({ quiz }) {
  const classes = useStyles();
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));

  return user || quiz.public === true ? (
    <Grid item xs={6} sm={4} md={4}>
      <Card className={classes.root}>
        <CardActionArea href={`/quiz/reply/${quiz._id}`}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={classes.title}
              align="center"
            >
              {quiz.title.length < 24
                ? quiz.title
                : `${quiz.title.substring(0, 24)}...`}
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="p"
              className={classes.title}
              align="center"
            >
              {quiz.description.length < 30
                ? quiz.description
                : `${quiz.description.substring(0, 30)}...`}
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
          <Button size="small" color="primary" href={`/quiz/reply/${quiz._id}`}>
            RESPONDER
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ) : (
    <React.Fragment></React.Fragment>
  );
}

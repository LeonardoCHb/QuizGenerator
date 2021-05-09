import { Button, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CopyToClipboard from "@vigosan/react-copy-to-clipboard";
import moment from "moment";
import "moment/locale/pt-br";
import React from "react";

// react

import styles from "./QuizCardStyles";

const useStyles = styles;

export default function QuizCard({ response }) {
  const classes = useStyles();

  return response ? (
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
              {response.quiz}
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="p"
              className={classes.title}
              align="center"
            >
              Respondido {moment(response.answeredAt).fromNow()}.
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
                  copy(`http://localhost:3000/quiz/reply/${response.quiz}`)
                }
              >
                Compartilhar
              </Button>
            )}
          />
          <Button size="small" color="primary">
            Ver questionario
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ) : (
    <React.Fragment></React.Fragment>
  );
}

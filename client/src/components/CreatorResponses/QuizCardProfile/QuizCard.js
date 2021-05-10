import { Button, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CopyToClipboard from "@vigosan/react-copy-to-clipboard";
import moment from "moment";
import "moment/locale/pt-br";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { findOne } from "../../../actions/profile";
import ShowResponse from "../ResponsesAllData/ResponsesAlldata";
import styles from "./QuizCardStyles";

const useStyles = styles;

export default function QuizCard({ response }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.profile)[0];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(findOne(response.quiz));
  }, [response]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return response && quiz ? (
    <Grid item xs={12} sm={12} md={6}>
      <Card className={classes.details}>
        <CardActionArea onClick={handleClickOpen}>
          <ShowResponse
            handleClose={handleClose}
            open={open}
            quiz={quiz}
            response={response}
          />
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

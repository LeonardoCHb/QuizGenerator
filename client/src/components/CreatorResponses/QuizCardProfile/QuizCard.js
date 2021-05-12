import { Button, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CopyToClipboard from "@vigosan/react-copy-to-clipboard";
import moment from "moment";
import "moment/locale/pt-br";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

import { findOneToView } from "../../../actions/quiz.js";
import styles from "./QuizCardStyles";
import ShowResponse from "./ShowResponse/ShowResponse.js";

const useStyles = styles;

export default function QuizCard({ response }) {
  const { addToast } = useToasts();
  const classes = useStyles();
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quizToView[response?.quiz]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(findOneToView(response.quiz));
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
        <ShowResponse
          handleClose={handleClose}
          open={open}
          quiz={{ ...quiz }}
          response={response}
        />
        <CardActionArea onClick={handleClickOpen}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={classes.title}
              align="center"
            >
              {response.quizTitle}
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
                onClick={() => {
                  copy(`http://localhost:3000/quiz/reply/${response.quiz}`);
                  addToast("LINK COPIADO.", {
                    appearance: "info",
                    autoDismiss: true,
                    autoDismissTimeout: 2000,
                  });
                }}
              >
                Compartilhar
              </Button>
            )}
          />
          <Button
            size="small"
            color="primary"
            href={response.sent ? false : `/quiz/reply/${response.quiz}`}
          >
            {response.sent ? "Enviado" : "Ver questionário"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ) : (
    <React.Fragment></React.Fragment>
  );
}

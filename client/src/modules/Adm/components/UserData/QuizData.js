// estilização
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
// bibliotecas
import moment from "moment";
import "moment/locale/pt-br";
// react e redux
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { findOneToView } from "../../../../actions/quiz";
import ShowResponse from "./ShowResponse/ShowResponse";
import styles from "./styles";

const useStyles = styles;

export default function QuizData({ response }) {
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
    <Card className={classes.DataCard}>
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
            variant="body2"
            component="p"
            className={classes.title}
            align="center"
          >
            Respondido {moment(response.answeredAt).fromNow()}.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ) : (
    <React.Fragment></React.Fragment>
  );
}

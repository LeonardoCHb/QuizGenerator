// estilização
import {
  Button,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
} from "@material-ui/core";
// bibliotecas
import CopyToClipboard from "@vigosan/react-copy-to-clipboard";
import moment from "moment";
import "moment/locale/pt-br";
// react e redux
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

// constantes e componentes
import { findOneToView } from "../../../../../actions/quiz";
import styles from "./QuizCardResponsesStyles";
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
              variant="body2"
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
                  copy(
                    `${process.env.REACT_APP_SITE_URL}/quiz/reply/${response.quiz}`
                  );
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
            href={response.sent ? "" : `/quiz/reply/${response.quiz}`}
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

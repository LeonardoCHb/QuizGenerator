/* eslint-disable no-unused-vars */
// estilização
import {
  Button,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
} from "@material-ui/core";
// bibliotecas
import { Parser } from "json2csv";
import moment from "moment";
import "moment/locale/pt-br";
// react e redux
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

import { quizResponses, deleteQuiz } from "../../../../actions/quiz";
import ShowQuiz from "./ShowQuiz/ShowQuiz";
import styles from "./styles";

const useStyles = styles;

export default function ResponseData({ quiz }) {
  const { addToast } = useToasts();
  const classes = useStyles();
  const dispatch = useDispatch();
  const responses = useSelector((state) => state.quizzesResponse[quiz?._id]);
  const [resToDownload, setResToDownload] = useState([]);
  const [fields, setFields] = useState([]);
  const json2csvParser = new Parser({ fields });
  const csv = json2csvParser.parse(resToDownload);
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-undef
  const dataToDownload = new Blob([csv], { type: "text/csv" });
  const csvURL = window.URL.createObjectURL(dataToDownload);
  const downloadlink = document.createElement("a");
  downloadlink.href = csvURL;
  downloadlink.setAttribute("download", "responses.csv");

  useEffect(() => {
    let res;
    const newObject = {};
    const field = ["name", "answeredAt"];
    const questions = quiz?.questions.map((e) => {
      return e.wording;
    });
    if (responses?.length > 0) {
      res = responses[0].map((e) => {
        e.responses.forEach((response, index) => {
          newObject[questions[index]] = response;
        });
        return {
          name: e.name,
          answeredAt: moment(e.answeredAt).format("DD/MM/YYYY HH:mm:ss"),
          ...newObject,
        };
      });
    }
    if (res && questions) {
      const csvHeader = field.concat(questions);
      setFields(csvHeader);
      setResToDownload(res);
    }
  }, [responses, quiz]);

  useEffect(() => {
    dispatch(quizResponses(quiz?._id));
  }, [quiz]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteQuiz(quiz?._id));
  };

  return responses && quiz ? (
    <Card className={classes.DataCard}>
      <ShowQuiz
        handleClose={handleClose}
        open={open}
        quiz={quiz}
        responses={responses[0]}
      />
      <CardActionArea onClick={handleClickOpen}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" align="center">
            {quiz.title.length < 37
              ? quiz.title
              : `${quiz.title.substring(0, 37)}...`}
          </Typography>
          <Typography gutterBottom variant="body2" component="p" align="center">
            {quiz.description.length < 50
              ? quiz.description
              : `${quiz.description.substring(0, 50)}...`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            downloadlink.click();
            addToast("BAIXANDO.", {
              appearance: "info",
              autoDismiss: true,
              autoDismissTimeout: 2000,
            });
          }}
        >
          Download
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            handleDelete();
            addToast("DELETANDO.", {
              appearance: "info",
              autoDismiss: true,
              autoDismissTimeout: 2000,
            });
          }}
        >
          Deletar
        </Button>
      </CardActions>
    </Card>
  ) : (
    <React.Fragment></React.Fragment>
  );
}

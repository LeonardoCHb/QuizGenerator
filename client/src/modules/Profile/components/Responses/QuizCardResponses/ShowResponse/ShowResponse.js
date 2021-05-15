import {
  Paper,
  AppBar,
  Container,
  Dialog,
  Grid,
  IconButton,
  Slide,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React, { useEffect, useState } from "react";

import CheckboxQuestion from "./components/TypeQuestions/Checkbox";
import RadioQuestion from "./components/TypeQuestions/Choice";
import TextQuestion from "./components/TypeQuestions/Text.js";
// import { responseToQuiz, findOne, findOneResponse } from "../../actions/quiz";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  subtitle: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ({ open, handleClose, response, quiz }) {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const user = JSON.parse(localStorage.getItem("profile"));
  // eslint-disable-next-line no-unused-vars
  const [responseSaved, setResponseSaved] = useState(null);
  console.log(responseSaved);
  useEffect(() => {
    if (response) {
      setResponseSaved(response.response);
    }
  }, [response]);

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {`${quiz.title}`}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" style={{ display: "flex", flexWrap: "wrap" }}>
          <Paper className={`${classes.paper} ${classes.form}`}>
            <Grid item xs={12}>
              {quiz.questions.map((question, index) => {
                switch (question.typeQuestion) {
                  case 1:
                    return (
                      <CheckboxQuestion
                        key={index}
                        id={index}
                        question={question}
                        response={responseSaved ? responseSaved[index] : null}
                      />
                    );
                  case 2:
                    return (
                      <RadioQuestion
                        key={index}
                        id={index}
                        question={question}
                        responseC={responseSaved ? responseSaved[index] : null}
                      />
                    );
                  case 3:
                    return (
                      <TextQuestion
                        key={index}
                        id={index}
                        question={question}
                        responseT={responseSaved ? responseSaved[index] : null}
                      />
                    );
                  default:
                    return "";
                }
              })}
            </Grid>
          </Paper>
        </Container>
      </Dialog>
    </div>
  );
}

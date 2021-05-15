import {
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
import React from "react";

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
  console.log(quiz, response);

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
          <Grid md={6}>
            <Typography variant="h6" className={classes.subtitle}>
              Questionário
              <Typography>{`${quiz._id}`}</Typography>
            </Typography>
          </Grid>
          <Grid md={6}>
            <Typography variant="h6" className={classes.subtitle}>
              Resposta
              <Typography>{`${response.quiz}`}</Typography>
            </Typography>
          </Grid>
        </Container>
      </Dialog>
    </div>
  );
}

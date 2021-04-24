import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import "./QuizList.css";

const useStyles2 = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    maxHeight: 10,
    maxWidth: 30,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mediaCard: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secundary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function MediaCard() {
    const classes = useStyles2();
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              IBGE
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              O Instituto Brasileiro de Geografia e Estatística é um instituto
              público da adminwadsdwasdwasdwasdwaO Instituto Brasileiro de
              Geografia e Estatística é um instituto público da
              adminwadsdwasdwasdwasdwaO Instituto Brasileiro de Geografia e
              Estatística é um instituto público da adminwadsdwasdwasdwasdwa
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className="ButtonColorC" variant="outlined" size="small">
            Compartilhar
          </Button>
          <Button className="ButtonColorR" variant="outlined" size="small">
            Responder
          </Button>
        </CardActions>
      </Card>
    );
  }

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <p className="CreateQuizTitle">NOVO QUESTIONARIO</p>
                <h1 className="CreateQuiz">+</h1>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <MediaCard className={classes.mediaCard}></MediaCard>
        </Grid>
        <Grid item xs={4}>
          <MediaCard className={classes.mediaCard}></MediaCard>
        </Grid>
        <Grid item xs={4}>
          <MediaCard className={classes.mediaCard}></MediaCard>
        </Grid>
        <Grid item xs={4}>
          <MediaCard className={classes.mediaCard}></MediaCard>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

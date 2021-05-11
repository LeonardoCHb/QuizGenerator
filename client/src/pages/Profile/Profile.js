import { Paper } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import Container from "@material-ui/core/Container";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { findAllUserQuizzes, findAllUserResponses } from "../../actions/quiz";
import Quiz from "../../components/CreatorQuizzes/CreatorQuizzes.js";
import Responses from "../../components/CreatorResponses/CreatorResponses.js";
import styles from "./styles.js";

// INICIO DAS FUNCOES PARA FUNCIONAMENTO DO COMPONENTE
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
// FIM DAS FUNCOES AUXILIARES

const useStyles = styles;

// INICIO DO COMPONENTE
const Profile = () => {
  const classes = useStyles();
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => setValue(newValue);
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizzesUser);
  const responses = useSelector((state) => state.response);

  useEffect(() => {
    dispatch(findAllUserQuizzes());
    dispatch(findAllUserResponses());
  }, []);

  useEffect(() => {
    dispatch(findAllUserResponses());
  }, [quizzes]);

  return (
    <>
      <Container className={classes.ProfileContainer}>
        {/* Container do Avatar */}
        <Container className={classes.AvatarContainer}>
          <Paper className={classes.AvatarPaper}>
            <CardActions className={classes.AvatarContainerInfo}>
              <Avatar
                className={classes.AvatarImage}
                alt={user?.result.name ? user?.result.name : "My robohash"}
                variant="circular"
                src={
                  user?.result.imageUrl
                    ? user?.result.imageUrl
                    : `https://robohash.org/${user?.result._id}`
                }
              />
              <Typography variant="h5">{user.result.name}</Typography>
              <Typography variant="p">{user.result.email}</Typography>
            </CardActions>
          </Paper>
        </Container>
        {/* Container dos Quiz Criados/Respondidos */}
        <Container className={classes.QuizContainer}>
          <Paper className={classes.QuizPaper}>
            <Tabs
              centered
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
            >
              <LinkTab label="Questionarios Criados" {...a11yProps(0)} />
              <LinkTab label="Questionarios Respondidos" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Typography variant="h5" align="justify">
                Questionarios criados: {quizzes ? quizzes.length : 0}
              </Typography>
              <Quiz quizzes={quizzes} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography variant="h5" align="justify">
                Nº de questionarios respondidos:{" "}
                {responses ? responses.length : 0}
              </Typography>
              <Responses responses={responses} />
            </TabPanel>
          </Paper>
        </Container>
      </Container>
    </>
  );
};
export default Profile;

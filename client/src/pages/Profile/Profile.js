import { Paper } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Quiz from "../../components/CreatorQuizzes/CreatorQuizzes.js";
import styles from "./styles.js";
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

const useStyles = styles;
const Profile = () => {
  const classes = useStyles();
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper}>
          <CardActions className={classes.containerProfile}>
            <Avatar
              className={classes.avatar}
              alt={user?.result.name ? user?.result.name : "My robohash"}
              src={
                user?.result.imageUrl
                  ? user?.result.imageUrl
                  : `https://robohash.org/${user?.result._id}`
              }
            />
            <Typography variant="h5">Nome: {user.result.name}</Typography>
            <Typography variant="h5">email: {user.result.email}</Typography>
          </CardActions>
        </Paper>
      </Container>
      <Container component="main" maxWidth="md">
        <Paper className={classes.quizzes}>
          <Tabs
            // variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Questionarios Criados" {...a11yProps(0)} />
            <LinkTab label="Questionarios Respondidos" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Grid container item xs={13} spacing={3}>
              <Typography variant="h5" align="justify">
                Nº de questionarios criados: 9999999
              </Typography>
              <Quiz />
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container item xs={13} spacing={3}>
              <Typography variant="h5" align="justify">
                Nº de questionarios respondidos: 666
              </Typography>
            </Grid>
          </TabPanel>
        </Paper>
      </Container>
    </>
  );
};
export default Profile;

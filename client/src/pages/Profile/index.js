import { Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

import Quiz from "./quiz.js";
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
      <Paper className={classes.paper}>
        <Typography variant="h5">Nome: jonisvaldo</Typography>
        <Typography variant="h6">
          Nº de questionarios criados: 9999999
        </Typography>
        <Typography variant="h6">
          Nº de questionarios respondidos: 666
        </Typography>
      </Paper>
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
            <Quiz />
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container item xs={13} spacing={3}>
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          </Grid>
        </TabPanel>
      </Paper>
    </>
  );
};
export default Profile;

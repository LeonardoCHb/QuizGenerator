import { Tooltip } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import { useTheme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import PropTypes from "prop-types";
import React from "react";
import SwipeableViews from "react-swipeable-views";

import Checkbox from "../TypeQuestions/Checkbox";
import Choice from "../TypeQuestions/choice";
import Text from "../TypeQuestions/Text";
import styles from "./styles.js";

const useStyles = styles;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function FloatingActionButtonZoom() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom="true" align="center">
        Crie suas questões.
      </Typography>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Multipla Escolha" {...a11yProps(0)} />
          <Tab label="Escolha Unica" {...a11yProps(1)} />
          <Tab label="Textual" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Checkbox />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Choice />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Text />
        </TabPanel>
      </SwipeableViews>

      <div className={classes.cardActions}>
        <Button disableRipple disableTouchRipple>
          <Tooltip
            title="Criar Questão"
            placement="top-start"
            aria-label="Add"
            arrow
          >
            <Fab className={classes.fabGreen} aria-label="add">
              <AddIcon />
            </Fab>
          </Tooltip>
        </Button>
        <Button disableRipple disableTouchRipple>
          <Tooltip
            title="Deletar Questão"
            placement="top-start"
            aria-label="Delete"
            arrow
          >
            <Fab className={classes.fabRed} aria-label="">
              <ClearIcon />
            </Fab>
          </Tooltip>
        </Button>
      </div>
    </div>
  );
}

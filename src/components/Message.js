import React from "react";
import background from "../img/background.jpg";

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
  Box,
  Paper,
} from "@material-ui/core";
import { MoreHorizRounded, ArrowBack } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import MssgBar from "./MssgBar";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 3.5,
    width: "65%",

    backgroundImage: `url(${background})`,
  },
  rootMobile: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#131c21",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    margin: 15,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  paper: {
    backgroundColor: "#262d31",
    margin: 10,
    marginLeft: 30,
    padding: 10,
    width: "50%",
    alignSelf: "flex-end",
  },
  paperHead: {
    color: "#00ae9b",
  },
}));
const Message = ({ img, title }) => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  return (
    <div
      className={window.innerWidth >= 400 ? classes.root : classes.rootMobile}
    >
      <AppBar position="static" style={{ backgroundColor: "#2a2f32" }}>
        <Toolbar>
          {window.innerWidth < 400 && (
            <IconButton color="inherit" onClick={history.goBack}>
              <ArrowBack />
            </IconButton>
          )}
          <Avatar
            alt="Remy Sharp"
            src={img}
            variant="rounded"
            className={classes.avatar}
          />
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <IconButton color="inherit">
            <MoreHorizRounded />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        style={{ height: "78%", overflowY: "scroll" }}
        display="flex"
        flexDirection="column"
      >
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" className={classes.paperHead}>
            Contact me
          </Typography>
        </Paper>
      </Box>
      {location.pathname == "/contact" && <MssgBar />}
    </div>
  );
};

export default Message;

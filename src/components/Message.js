import React, { useState } from "react";
import background from "../img/background.jpg";
import data from '../data.json'

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
import EachMssg from "./EachMssg";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "65%",
    height: "95vh",
    backgroundImage: `url(${background})`,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  rootMobile: {
    width: "100%",
    height: "95vh",
    backgroundImage: `url(${background})`,

    backgroundColor: "#131c21",
    display: 'flex',
    flexDirection: 'column',
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
  const [returnMssg, setRetMssg] = useState(false)
  const [newMssg, setNewMssg] = useState(false)
  return (
    <div
      className={window.innerWidth >= 720 ? classes.root : classes.rootMobile}
    >
      <AppBar position="static" style={{ backgroundColor: "#2a2f32" }}>
        <Toolbar>
          {window.innerWidth < 720 && (
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
        style={{ overflowY: "scroll" }}
        display="flex"
        flexDirection="column"
      >
        {
          data[title].map(({ title, img = false, link = false, description, para = false }, index) => (
            <EachMssg title={title} align={index % 2 == 0 ? "left" : "right"} description={description} img={img} link={link} para={para} />
          ))
        }
        {location.pathname == "/contact" && newMssg && <EachMssg title="Me" align="right" description={newMssg} />}
        {location.pathname == "/contact" && returnMssg && <EachMssg title="Harsh Soni" align="left" description="I've got ur message, will ping u in mail shortly..." />}
      </Box>
      <div style={{ marginTop: 'auto' }}>
        {location.pathname == "/contact" && <MssgBar addMssg={setRetMssg} setNewMssg={setNewMssg} />}
      </div>
    </div>
  );
};

export default Message;

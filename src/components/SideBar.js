import React, { useState } from "react";
import profile from "../img/profile.jpg";
import briefing from "../img/briefing.png";

import contact from "../img/contact.png";
import graduationCap from "../img/graduation-cap.png";
import information from "../img/information.png";
import skills from "../img/skills.png";
import portfolio from "../img/portfolio.png";

import { useHistory } from "react-router-dom";

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
  Badge,
  Box,
  Button,
  Dialog,
  DialogTitle,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    width: "35%",

    backgroundColor: "#131c21",
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
  button: {
    justifyContent: "flex-start",
    backgroundColor: "#131c21",
    color: "white",
    "&:hover": {
      backgroundColor: "#323739",
    },
  },
  badge: {
    justifySelf: "flex-start",
    position: "relative",
    left: -20,
  },
  customBadge: {
    backgroundColor: "#00af9c",
    color: "black",
  },
  dialog: {
    padding: 15,
    backgroundColor: "#131c21",
    color: "white",
  },
}));

const SideBar = () => {
  const classes = useStyles();
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    if (window.innerWidth < 400) {
      setOpen(true);
    }
  };
  return (
    <div
      className={window.innerWidth >= 400 ? classes.root : classes.rootMobile}
    >
      <AppBar position="static" style={{ backgroundColor: "#2a2f32" }}>
        <Toolbar>
          <Avatar alt="Remy Sharp" src={profile} className={classes.avatar} />
          <Typography variant="h6" className={classes.title}>
            Harsh Soni
          </Typography>

          <IconButton color="inherit" onClick={openDialog}>
            <Badge
              color="secondary"
              variant="dot"
              invisible={window.innerWidth >= 400}
            >
              <MoreVert />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {[
        { name: "About me", img: information, link: "about" },
        { name: "Skills", img: skills, link: "skills" },
        { name: "Experience", img: portfolio, link: "experience" },
        { name: "Projects", img: briefing, link: "projects" },
        { name: "Education", img: graduationCap, link: "education" },
        { name: "Contact me", img: contact, link: "contact" },
      ].map((item) => (
        <Box display="flex" alignItems="center">
          <Button
            fullWidth
            className={classes.button}
            variant="contained"
            onClick={() => history.push("/" + item.link)}
          >
            <Avatar
              alt="Remy Sharp"
              src={item.img}
              className={classes.avatar}
              variant="rounded"
            />

            <Box>
              <Typography>{item.name}</Typography>
              <Typography variant="caption">{item.name}</Typography>
            </Box>
          </Button>

          <Badge
            badgeContent={4}
            className={classes.badge}
            classes={{ badge: classes.customBadge }}
            color="primary"
          ></Badge>
        </Box>
      ))}
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        classes={{ paper: classes.dialog }}
      >
        <DialogTitle>Tip</DialogTitle>
        <Typography variant="p">
          Open this website in desktop to get better experience or rotate your
          phone and then refresh
        </Typography>
      </Dialog>
    </div>
  );
};

export default SideBar;

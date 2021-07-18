import React, { useState } from "react";
import Picker from "emoji-picker-react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import {
  TextField,
  AppBar,
  IconButton,
  Toolbar,
  Menu,
  CircularProgress,
  Tooltip,
} from "@material-ui/core";
import { InsertEmoticon, MicNone, Telegram } from "@material-ui/icons";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import EachMssg from "./EachMssg";

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#00af9c",
      },
    },
  },
})(TextField);
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  avatar: {
    margin: 20,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  textfield: {
    color: "white",
    borderRadius: 50,
    backgroundColor: "#33383b",
    paddingLeft: 30,
  },
  progress: {
    color: "#00af9c",
  },
}));
const MssgBar = ({ addMssg, setNewMssg }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const { transcript, finalTranscript, resetTranscript, listening } =
    useSpeechRecognition();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = text.split(" ")[0]
    const message = text.split(" ").slice(1).join(" ")

    if (message.length == 0) alert("Please enter a mssg after email")
    else {
      setNewMssg(message)

      var res = await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          message, email
        }),
      });

      addMssg(true);


      setText("");
    }



  };

  const startListening = () => {
    SpeechRecognition.startListening();
  };

  const getMic = () => {
    if (finalTranscript) {
      setText(text + transcript);
      resetTranscript();
    }
    return <MicNone />;
  };

  const FORMSPARK_ACTION_URL = "https://submit-form.com/qgEkQhYA";
  return (
    <AppBar position="static" style={{ backgroundColor: "#2a2f32" }}>
      <Toolbar>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", width: "100%" }}
        >
          <CssTextField
            InputProps={{
              className: classes.textfield,
            }}
            variant="outlined"
            placeholder="your@mail.com Hi, there!"
            fullWidth
            style={{ color: "white" }}
            value={text + transcript}
            onChange={(e) => setText(e.target.value)}
          />

          <Tooltip title="Send Message ">
            <IconButton color="inherit" type="submit">
              <Telegram />
            </IconButton>
          </Tooltip>
        </form>
        {window.innerWidth >= 720 && (
          <Tooltip title="Type by Voice ">
            <IconButton color="inherit" onClick={startListening}>
              {listening ? (
                <CircularProgress size={30} className={classes.progress} />
              ) : (
                getMic()
              )}
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MssgBar;

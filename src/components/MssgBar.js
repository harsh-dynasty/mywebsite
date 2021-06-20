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
const MssgBar = () => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const { transcript, finalTranscript, resetTranscript, listening } =
    useSpeechRecognition();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onEmojiClick = (event, emojiObject) => {
    setText(text + emojiObject.emoji);
    handleClose();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(text);
    setText("");
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

  return (
    <AppBar position="static" style={{ backgroundColor: "#2a2f32" }}>
      <Toolbar>
        {window.innerWidth >= 400 && (
          <Tooltip title="Insert Emoji ">
            <IconButton
              color="inherit"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <InsertEmoticon />
            </IconButton>
          </Tooltip>
        )}

        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Picker onEmojiClick={onEmojiClick} />
        </Menu>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", width: "100%" }}
        >
          <CssTextField
            InputProps={{
              className: classes.textfield,
            }}
            variant="outlined"
            placeholder="Type a message"
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
        {window.innerWidth >= 400 && (
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

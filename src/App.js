import { Box } from "@material-ui/core";
import "./App.css";
import { DesktopRoutes, MobileRoutes } from "./components/Routes";

import { BrowserRouter as Router } from "react-router-dom";
import Media from "react-media";
import SideBar from "./components/SideBar";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Box display="flex">
          <Media query="(max-width: 720px)">
            {(matches) =>
              matches ? (
                // <SideBar />
                <MobileRoutes />
              ) : (
                <>
                  {" "}
                  <SideBar />
                  <DesktopRoutes />
                </>
              )
            }
          </Media>
          {/* <SideBar />

          <DesktopRoutes /> */}
        </Box>
      </Router>
    </div>
  );
}

export default App;

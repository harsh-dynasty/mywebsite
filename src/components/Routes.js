import React from "react";
import { Switch, Route } from "react-router-dom";
import Message from "./Message";

import contact from "../img/contact.png";
import graduationCap from "../img/graduation-cap.png";
import information from "../img/information.png";
import skills from "../img/skills.png";
import portfolio from "../img/portfolio.png";
import briefing from "../img/briefing.png";
import SideBar from "./SideBar";

const DesktopRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Message title={"Dasboard"} />
      </Route>
      <Route path="/about">
        <Message img={information} title="About Me" />
      </Route>
      <Route path="/skills">
        <Message img={skills} title="Skills" />
      </Route>
      <Route path="/experience">
        <Message img={graduationCap} title="Experience" />
      </Route>
      <Route path="/education">
        <Message img={briefing} title="Education" />
      </Route>
      <Route path="/projects">
        <Message img={portfolio} title="Projects" />
      </Route>
      <Route path="/contact">
        <Message img={contact} title="Contact Me" />
      </Route>
    </Switch>
  );
};

const MobileRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <SideBar />
      </Route>
      <Route path="/about">
        <Message img={information} title="About Me" />
      </Route>
      <Route path="/skills">
        <Message img={skills} title="Skills" />
      </Route>
      <Route path="/experience">
        <Message img={graduationCap} title="Experience" />
      </Route>
      <Route path="/education">
        <Message img={briefing} title="Education" />
      </Route>
      <Route path="/projects">
        <Message img={portfolio} title="Projects" />
      </Route>
      <Route path="/contact">
        <Message img={contact} title="Contact Me" />
      </Route>
    </Switch>
  );
};

export { DesktopRoutes, MobileRoutes };


import React, { createContext } from "react";

const ProjectContext = React.createContext({
  project1: false,
  project2: false,
  project3: false,
  project4: false,
  project1OnClose: () => {},
  project1OnShow: () => {},
  project2OnClose: () => {},
  project2OnShow: () => {},
  project3OnClose: () => {},
  project3OnShow: () => {},
  project4OnClose: () => {},
  project4OnShow: () => {},
});

export default ProjectContext;

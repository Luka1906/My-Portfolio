import { useState } from "react";

const useProject = () => {
  const [showProject, setShowProject] = useState(false);

  const closeProjectHandler = () => {
    setShowProject(false);
  };
  const showProjectHandler = () => {
    setShowProject(true);
  };

  return {
    showProject,
    closeProjectHandler,
    showProjectHandler
  }
};

export default useProject;

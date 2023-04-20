import ProjectContext from "./project-context";
import useProject from "../hooks/use-project";

const ProjectProvider = (props) => {
  const {
    showProject: project1,
    showProjectHandler: showProject1Handler,
    closeProjectHandler: closeProject1Handler,
  } = useProject();

  const {
    showProject: project2,
    showProjectHandler: showProject2Handler,
    closeProjectHandler: closeProject2Handler,
  } = useProject();

  const {
    showProject: project3,
    showProjectHandler: showProject3Handler,
    closeProjectHandler: closeProject3Handler,
  } = useProject();

  const {
    showProject: project4,
    showProjectHandler: showProject4Handler,
    closeProjectHandler: closeProject4Handler,
  } = useProject();

  const projectContext = {
    project1: project1,
    project2: project2,
    project3: project3,
    project4: project4,
    project1OnClose: closeProject1Handler,
    project1OnShow: showProject1Handler,
    project2OnClose: closeProject2Handler,
    project2OnShow: showProject2Handler,
    project3OnClose: closeProject3Handler,
    project3OnShow: showProject3Handler,
    project4OnClose: closeProject4Handler,
    project4OnShow: showProject4Handler,
  };

  return (
    <ProjectContext.Provider value={projectContext}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;

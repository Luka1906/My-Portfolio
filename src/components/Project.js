import Project1Modal from "../UI/Project1Modal";
import ProjectButton from "../UI/ProjectButton";
import "./Project.css";

const Project = (props) => {
  return (
    <Project1Modal onClose={props.onClose}>
      <div className="projects">
        <img className="project-image" src={props.image} alt="project1" />
        <p>{props.text}</p>
        <div className="project-footer">
          <div className="project-icons">
            <p>Github</p>{" "}
            <a href={props.href} target="blank">
              {props.github}
            </a>
            <p>Live Demo</p>
            <a href={props.href1} target="blank">
              {props.player}
            </a>
          </div>

          <ProjectButton onClose={props.onClose}>Close</ProjectButton>
        </div>
      </div>
    </Project1Modal>
  );
};
export default Project;

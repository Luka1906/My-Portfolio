import classes from "./SkillsHeader.module.css";
const SkillsHeader = () => {
  return (
    <>
      <div className={classes["skills-header"]}>
        <h2>What do I do</h2>
      </div>
      <div className={classes.skills}>
        <p>Skills</p>
      </div>
    </>
  );
};

export default SkillsHeader;

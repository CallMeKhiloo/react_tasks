import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <br />
      <div className="skill-container">
        <p>React</p>
        <div className="progress-bar">
          <div className="progress-fill react-level"></div>
        </div>
        <br />
        <p>Nodejs</p>
        <div className="progress-bar">
          <div className="progress-fill nodejs-level"></div>
        </div>
        <br />
        <p>c++</p>
        <div className="progress-bar">
          <div className="progress-fill cpp-level"></div>
        </div>
      </div>
    </section>
  );
};
export default Skills;

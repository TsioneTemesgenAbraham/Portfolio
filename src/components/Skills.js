import htmlsvg from "../assets/Htmlp.svg";
import css from "../assets/CSS.svg";
import bootstrapsvg from "../assets/Bootstrap.png";
import jspng from "../assets/JS.svg";
import nodepng from "../assets/Nodej.svg";
import psqlpng from "../assets/PSQL.svg";
import reactpng from "../assets/reactpng.svg";
import gitpng from "../assets/Git.svg";

function Skills() {
  return (
    <div className="so-icon" id="skills">
      <h1 className="skill-h1">Skills</h1>
      <img src={htmlsvg} className="a-icon" alt="Icon" />
      <img src={css} className="a-icon" alt="Icon" />
      <img src={bootstrapsvg} className="a-icon" alt="Icon" />
      <img src={jspng} className="a-icon" alt="Icon" />
      <img src={nodepng} className="a-icon" alt="Icon" />
      <img src={psqlpng} className="a-icon" alt="Icon" />
      <img src={reactpng} className="a-icon" alt="Icon" />
      <img src={gitpng} className="a-icon" alt="Icon" />
    </div>
  );
}

export default Skills;

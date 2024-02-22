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
    <div className="so-icon">
      <h1 className="skill-h1">Skills</h1>
      <a>
        <img src={htmlsvg} alt="Icon" />
      </a>
      <a>
        <img src={css} alt="Icon" />
      </a>
      <a>
        <img src={bootstrapsvg} alt="Icon" />
      </a>
      <a>
        <img src={jspng} alt="Icon" />
      </a>
      <a>
        <img src={nodepng} alt="Icon" />
      </a>
      <a>
        <img src={psqlpng} alt="Icon" />
      </a>
      <a>
        <img src={reactpng} alt="Icon" />
      </a>
      <a>
        <img src={gitpng} alt="Icon" />
      </a>
    </div>
  );
}

export default Skills;

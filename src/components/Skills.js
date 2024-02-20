import Card from "react-bootstrap/Card";
const skillsData = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "React.js" },
  { id: 5, name: "Node.js" },
  { id: 6, name: "Express.js" },
  { id: 7, name: "MongoDB" },
  { id: 8, name: "SQL" },
  { id: 9, name: "Python" },
  { id: 10, name: "Git" },
  { id: 11, name: "Bootstrap" },
  { id: 12, name: "PostgreSQL" },
  { id: 13, name: "Heroku" },
  { id: 14, name: "" },
];

function Skills() {
  return (
    <div className="skills-grid">
      {skillsData.map((skill) => (
        <div key={skill.id} className="skill-card">
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;

//importera useState
import { useState } from "react";

export default function Skill() {
  // skapa ett state för skills
  const [skills, setSkills] = useState(["JavaScript", "TypeScript", "React"]);

  // Add skills
  function handleAddSkill() {
    const newSkill = document.getElementById("skillInput").value;
    document.getElementById("skillInput").value = "";
    setSkills((prevSkills) => [...prevSkills, newSkill]);
  }

  // Remove skills
  function handleRemoveSkill(index) {
    setSkills(skills.filter((skill, i) => i !== index));
  }

  return (
    <div>
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} onDoubleClick={() => handleRemoveSkill(index)}>
            {skill}
          </li>
        ))}
      </ul>
      <input id="skillInput" type="text" placeholder="Enter skill" />

      <button onClick={handleAddSkill}>Add skill</button>
    </div>
  );
}

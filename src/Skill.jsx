//importera useState
import { useState } from "react";

export default function Skill({ items }) {
  // ett nytt state
  const [inputValue, setInputValue] = useState("");

  // Add skills
  function handleAddSkill() {
    setSkills((prevSkills) => [...prevSkills, inputValue]);
    setInputValue("");
  }

  // Remove skills
  function handleRemoveSkill(index) {
    setSkills(items.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>My Skills</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} onDoubleClick={() => handleRemoveSkill(index)}>
            {item}
          </li>
        ))}
      </ul>
      <input
        id="skillInput"
        type="text"
        placeholder="Enter skill"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleAddSkill}>Add skill</button>
    </div>
  );
}

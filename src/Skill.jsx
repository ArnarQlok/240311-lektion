//importera useState
import { useState } from "react";
import PropTypes from "prop-types";

export default function Skill({ items, setItems }) {
  // ett nytt state
  const [inputValue, setInputValue] = useState("");

  // Add skills
  function handleAddSkill() {
    setItems((prevSkills) => [...prevSkills, inputValue]);
    setInputValue("");
  }

  // Remove skills
  function handleRemoveSkill(index) {
    setItems(items.filter((_, i) => i !== index));
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
Skill.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

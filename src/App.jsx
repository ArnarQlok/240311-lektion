import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Skill from "./Skill";
import Computer from "./Computer";
import ArrayOfObject from "./ArrayOfObject";

function App() {
  // skapa ett state för skills
  const [progSkills, setProgSkills] = useState([
    "JavaScript",
    "TypeScript",
    "React",
  ]);
  const [foodSkills, setFoodSkills] = useState([33]);
  return (
    <>
      {progSkills.length > 0 && (
        <Skill items={progSkills} setItems={setProgSkills} />
      )}
      <Skill items={foodSkills} setItems={setFoodSkills} />
      {/* <Computer /> */}
      {/* <ArrayOfObject /> */}
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Skill from "./Skill";
import Computer from "./Computer";

function App() {
  // skapa ett state för skills
  const [progSkills, setProgSkills] = useState([
    "JavaScript",
    "TypeScript",
    "React",
  ]);
  const [foodSkills, setFoodSkills] = useState([
    "Koka them makaroner",
    "Hacka that lök",
  ]);
  return (
    <>
      {/* <Skill items={progSkills} />
      <Skill items={foodSkills} /> */}
      <Computer />
    </>
  );
}

export default App;

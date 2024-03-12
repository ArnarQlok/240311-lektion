import { useState } from "react";

const ArrayOfObject = () => {
  // Först behöver ha en array för våra objekt
  const [computers, setComputers] = useState([]);
  // Sen behöver vi states för objektets properties
  const [computerYear, setComputerYear] = useState(new Date().getFullYear());
  const [computerBrand, setComputerBrand] = useState("");
  const [computerModel, setComputerModel] = useState("");

  function handleAddComputer() {
    const newComputer = {
      year: computerYear,
      brand: computerBrand,
      model: computerModel,
    };
    setComputers((computers) => [...computers, newComputer]);

    setComputerYear(new Date().getFullYear());
    setComputerBrand("");
    setComputerModel("");
  }

  function handleRemoveComputer(index) {
    setComputers((computers) => computers.filter((_, i) => i !== index));
  }

  function handleYearChange(event) {
    setComputerYear(event.target.value);
  }
  function handleBrandChange(event) {
    setComputerBrand(event.target.value);
  }
  function handleModelChange(event) {
    setComputerModel(event.target.value);
  }

  return (
    <div>
      <h2>List of Computers</h2>
      <ul>
        {computers.map((computer, index) => (
          <li key={index} onDoubleClick={() => handleRemoveComputer(index)}>
            Year: {computer.year} Brand: {computer.brand} Model:{" "}
            {computer.model}
          </li>
        ))}
      </ul>
      <input type="number" value={computerYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={computerBrand}
        onChange={handleBrandChange}
        placeholder="Enter computer brand"
      />{" "}
      <br />
      <input
        type="text"
        value={computerModel}
        onChange={handleModelChange}
        placeholder="Enter computer model"
      />
      <br />
      <button onClick={handleAddComputer}>Add a new computer</button>
    </div>
  );
};

export default ArrayOfObject;

import { useState } from "react";

const Computer = () => {
  const [computer, setComputer] = useState({
    year: 2020,
    brand: "Apple",
    model: "Macbook Air",
  });
  function handleYearChange(e) {
    setComputer((prevComputer) => ({ ...prevComputer, year: e.target.value }));
    // setComputer({ year: 2020, brand: "Apple", model: "Macbook Air", year: 2024})
  }
  function handleBrandChange(e) {
    setComputer((c) => ({ ...c, brand: e.target.value }));
  }
  function handleModelChange(e) {
    setComputer((c) => ({ ...c, model: e.target.value }));
  }

  return (
    <div>
      <p>
        My computer is a {computer.year} {computer.brand} {computer.model}{" "}
      </p>
      <input type="number" value={computer.year} onChange={handleYearChange} />{" "}
      <br />
      <input
        type="text"
        value={computer.brand}
        onChange={handleBrandChange}
      />{" "}
      <br />
      <input
        type="text"
        value={computer.model}
        onChange={handleModelChange}
      />{" "}
      <br />
    </div>
  );
};

export default Computer;

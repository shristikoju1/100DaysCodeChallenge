import React, { useState } from "react";

const DisplayFruits = () => {
  const [fruit, setFruit] = useState("");
  const [fruitArray, setFruitArray] = useState([]);

  const handleSubmission = (e) => {
    e.preventDefault();
    setFruitArray([...fruitArray, fruit]);
    setFruit("");
    console.log("Submitted fruit:", fruit);
  };

  return (
    <div>
      <h5>Enter your favourite fruit</h5>
      <form onSubmit={handleSubmission}>
        <input
          type="text"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ol>
        {fruitArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default DisplayFruits;

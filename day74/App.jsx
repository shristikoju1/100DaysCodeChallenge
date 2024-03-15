import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    if (!weight || !height || weight <= 0 || height <= 0) {
      alert("Please enter valid weight and height");
    } else {
      const bmi = weight / ((height / 100) * (height / 100)); // Convert height to meters
      setBMI(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You have a normal weight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are overweight");
      } else {
        setMessage("You are obese");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App flex-row justify-center items-center mt-20">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-6">
          BMI Calculator
        </h2>
        
      <div className=" flex justify-center items-center border border-gray-500 p-4 h-26 w-80 mx-auto" >
      
        <form onSubmit={calcBmi}>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Weight(lbs)
            </label>
            <input
              type="number"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="placeholder-gray-500 border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Height(in)
            </label>
            <input
              type="number"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="placeholder-gray-500 border"
            />
          </div>

          <div>
            <button
              className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4 mt-3 mb-3"
              type="submit"
            >
              Submit
            </button>
            <button
              className="btn btn-outline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={reload}
              type="button"
            >
              Reload
            </button>
          </div>

          <div className="center">
            <h3 className="mb-3">Your BMI is : {bmi} </h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

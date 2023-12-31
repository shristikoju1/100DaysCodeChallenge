import React, { useState } from "react";


const ClickCounter = (props) => {
    const [count, setCount] = useState(0);
    const [buttonClicked, setButtonClicked] = useState(false);
  
    const increment = () => {
      setCount(count + 1);
      setButtonClicked(true);
  
    };
  
    const decrement = () => {
      setCount(count - 2);
      setButtonClicked(true);
  
    };

    
    return (
        <div>
        
          <h1>Click Counter</h1>
          <h4>Count: {count}</h4>
          <button onClick={increment}>Increment by 1</button>
          <button onClick={decrement}>Decrement by 2</button>
    
          {buttonClicked? <p>Button Clicked!</p>:<p></p>}
    
        </div>
      );
    };


export default ClickCounter;
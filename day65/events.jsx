import { useState } from "react";

const  MyButton=()=> {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    //   alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
}

  export default MyButton;
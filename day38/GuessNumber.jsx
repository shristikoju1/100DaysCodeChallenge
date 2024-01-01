
import React, {useState, useEffect} from "react";
// import React, {useEffect} from "react";

const GuessNumber = () =>{
    const[inputNumber, setInputNumber] = useState('');
    const[secretNumber, setSecretNumber] = useState('');
    const[message, setMessage] = useState("");


    const handleInputChange = (e) => {
        setInputNumber(e.target.value);
    
    };
    
    useEffect(() => {
        const num = Math.floor(Math.random() * 20);
        setSecretNumber(num);
    }, []);

    useEffect(() => {
        if ((parseInt(inputNumber)) === secretNumber) {
            setMessage("You Guessed, Hurray !!");
            
        } else if ((parseInt(inputNumber)) < secretNumber) {
            setMessage("Try Again, number is less");
            
        } else if ((parseInt(inputNumber)) > secretNumber) {
            setMessage("Try Again, number is more");
           
        }
    }, [inputNumber]);

    

    return(
        <div>
            <h1>Guessing Game</h1>
            <div>
                <h5>Enter your guess between 0 to 20</h5>
            <input type="number" value={inputNumber} onChange={handleInputChange} />
            </div>
            {message}
        </div>
    )

};      
      
export default GuessNumber;


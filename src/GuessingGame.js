import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function GuessingGame(props) {
    const [luckyNum, setNum] = useState(Math.ceil(Math.random() * 100));
    const [guess, setGuess] = useState('');
    const [guessCount, setGuessCount] = useState(0);
    const [results, setResult] = useState('');

    // useEffect(() => {
    //     localStorage.setItem("luckyNum", luckyNum);
    //     console.log(luckyNum);
    // }, []);
    
    localStorage.setItem("Lucky Number", JSON.stringify(luckyNum));
    localStorage.setItem("Guess Count", JSON.stringify(guessCount));

    function generateGuess() {
        setNum(luckyNum);
        props.onSubmit(guess);
            if (guess == luckyNum) {
                setResult(<p className="alert alert-success">Congrats! You guessed correctly!</p>);
                localStorage.removeItem("Lucky Number");
                localStorage.removeItem("Guess Count");
            } else if (guess < luckyNum) {
                setGuessCount(guessCount + 1);                
                setResult(<p className="alert alert-warning">Number is too low</p>);
            } else {
                setGuessCount(guessCount + 1); 
                setResult(<p className="alert alert-warning">Number is too high</p>);
            }    
    }

    function updateGuess(event) {
        setGuess(event.target.value);      
    }

    function resetGame() {
        setNum(Math.ceil(Math.random() * 100));
        setGuess('');
        setGuessCount(0);
        setResult('');
        localStorage.removeItem("Lucky Number");
        localStorage.removeItem("Guess Count");
      }


    return (<>
        <div style={{ textAlign: 'center' }}>
        <h3>I am thinking of a number between 1 and 100. Guess the Lucky Number!</h3> 
        <Form>
        <Form.Group className="mb-3" >
        <Form.Label>Enter guess:</Form.Label>
        <Form.Control type="text" value={guess} onChange={updateGuess} placeholder="enter a number" name="name" />
        </Form.Group>
        <Button onClick={generateGuess}>Guess</Button>
        </Form>
        <p>You have made {guessCount} guesses</p>
        </div>
        <Button onClick={resetGame}>Reset</Button>
        {results}
        </>);
}

export default GuessingGame;
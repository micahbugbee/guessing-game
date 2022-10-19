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
 
    function generateGuess() {
        setNum(luckyNum);
        props.onSubmit(guess);
            if (guess == luckyNum) {
                setResult(<p className="alert alert-success">"Congrats! You guessed correctly!"</p>);
            } else if (guess < luckyNum) {
                setGuessCount(guessCount + 1); 
                localStorage.setItem("guessCount", guessCount);
                setResult(<p className="alert alert-warning">Number is too low</p>);
            } else {
                setGuessCount(guessCount + 1); 
                localStorage.setItem("guessCount", guessCount);
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
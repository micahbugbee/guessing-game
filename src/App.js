import React, {useState} from 'react';
import GuessingGame from './GuessingGame';

function App() {

  const [guess, setGuess] = useState('');
  const [luckyNum, setNum] = useState(0);
  const [guessCount, setGuessCount] = useState(0);


  function generateGuess(newGuess) {
    setGuess(newGuess);
    setGuessCount(guessCount + 1);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <GuessingGame onSubmit={generateGuess} luckyNum={luckyNum}  />
    </div>
  );
}

export default App;

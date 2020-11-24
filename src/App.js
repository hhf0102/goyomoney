import React, { useState } from 'react';
import './App.module.scss';
import GameBoard from './components/GameBoard/GameBoard';
import styles from './App.module.scss';

function App() {
  const [boardKey, setBoardKey] = useState(0);

  const handleReset = () => {
    setBoardKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <GameBoard key={boardKey} />
      <div className={styles['button-container']}>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import styles from './App.module.scss';
import GameBoard from './components/GameBoard/GameBoard';

function App() {
  const [boardKey, setBoardKey] = useState(0); // to force component's state reset

  const handleReset = () => {
    setBoardKey((prevKey) => prevKey + 1);
  };

  return (
    <div className={styles['app-container']}>
      <GameBoard key={boardKey} />
      <button className={styles['button-reset']} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;

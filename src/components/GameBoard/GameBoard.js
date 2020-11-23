import React from 'react';

import styles from './GameBoard.module.scss';
import Card from '../Card/Card';

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const imageList = [...Array(10)].map(
  (_, idx) => `https://picsum.photos/id/${idx + 11}/100/120`
);
const imageListDouble = [...imageList, ...imageList];

const GameBoard = () => {
  const cardList = shuffle(imageListDouble);

  return (
    <div className={styles['board-container']}>
      {cardList.map((_, idx) => {
        return <Card key={idx} />;
      })}
    </div>
  );
};

export default GameBoard;

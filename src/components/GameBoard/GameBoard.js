import React, { useState } from 'react';

import styles from './GameBoard.module.scss';
import Card from '../Card/Card';

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let imageList = [];

for (let i = 0; i < 2; i++) {
  const list = [...Array(10)].map((_, idx) => ({
    isShowed: false,
    imgSrc: `https://picsum.photos/id/${idx + 11}/100/120`,
  }));
  imageList.push(list);
}

const GameBoard = () => {
  const [cardList, setCardList] = useState(shuffle(imageList.flat()));
  console.log(cardList);

  const handleClickCard = (idx) => {
    const newCardList = [...cardList];
    newCardList[idx].isShowed = true;
    setCardList(newCardList);
  };

  return (
    <div className={styles['board-container']}>
      {cardList.map((imgObj, idx) => {
        return (
          <Card
            key={idx}
            imgSrc={imgObj.imgSrc}
            isShowed={imgObj.isShowed}
            onClick={() => handleClickCard(idx)}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;

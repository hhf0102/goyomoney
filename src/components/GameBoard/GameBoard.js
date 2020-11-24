import React, { useState, useRef, useEffect } from 'react';

import styles from './GameBoard.module.scss';
import Card from '../Card/Card';
import card_1 from '../../assets/images/card_1.jpg';
import card_2 from '../../assets/images/card_2.jpg';
import card_3 from '../../assets/images/card_3.jpg';
import card_4 from '../../assets/images/card_4.jpg';
import card_5 from '../../assets/images/card_5.jpg';
import card_6 from '../../assets/images/card_6.jpg';
import card_7 from '../../assets/images/card_7.jpg';
import card_8 from '../../assets/images/card_8.jpg';
import card_9 from '../../assets/images/card_9.jpg';
import card_10 from '../../assets/images/card_10.jpg';

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const imageList = [
  card_1,
  card_2,
  card_3,
  card_4,
  card_5,
  card_6,
  card_7,
  card_8,
  card_9,
  card_10,
];

let timerID = null;

const GameBoard = () => {
  let imageListDouble = [];

  for (let i = 0; i < 2; i++) {
    const list = imageList.map((img) => ({
      imgSrc: img,
      isShowed: false,
    }));
    imageListDouble = imageListDouble.concat(list);
  }
  const [cardList, setCardList] = useState(shuffle(imageListDouble));
  const [isLockBoard, setIsLockBoard] = useState(false);
  const firstCardRefObj = useRef(null);
  const secondCardRefObj = useRef(null);

  const checkForMatch = () => {
    if (
      cardList[firstCardRefObj.current].imgSrc ===
      cardList[secondCardRefObj.current].imgSrc
    ) {
      firstCardRefObj.current = null;
      secondCardRefObj.current = null;
      setIsLockBoard(false);
    } else {
      timerID = setTimeout(() => {
        unflipCard(firstCardRefObj.current);
        unflipCard(secondCardRefObj.current);
        firstCardRefObj.current = null;
        secondCardRefObj.current = null;
        setIsLockBoard(false);
      }, 1500);
    }
  };

  const flipCard = (idx) => {
    const newCardList = [...cardList];
    newCardList[idx].isShowed = true;
    setCardList(newCardList);
  };

  const unflipCard = (idx) => {
    const newCardList = [...cardList];
    newCardList[idx].isShowed = false;
    setCardList(newCardList);
  };

  const handleClickCard = (idx) => {
    if (!cardList[idx].isShowed && !isLockBoard) {
      flipCard(idx);

      if (firstCardRefObj.current === null) {
        firstCardRefObj.current = idx;
      } else {
        secondCardRefObj.current = idx;
        setIsLockBoard(true);
        checkForMatch();
      }
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

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

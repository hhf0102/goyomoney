import React, { useState, useRef, useEffect } from 'react';

import styles from './GameBoard.module.scss';
import Card from '../Card/Card';
import useCardList from './useCardList';

let timerID = null;

const GameBoard = () => {
  const [cardList, setCardList] = useState(useCardList());
  const [isLockBoard, setIsLockBoard] = useState(false);
  const firstCardRefObj = useRef(null);
  const secondCardRefObj = useRef(null);

  const resetCardsRefObj = () => {
    firstCardRefObj.current = null;
    secondCardRefObj.current = null;
  };

  const checkForMatch = () => {
    if (
      cardList[firstCardRefObj.current].imgSrc ===
      cardList[secondCardRefObj.current].imgSrc
    ) {
      resetCardsRefObj();
      setIsLockBoard(false);
    } else {
      timerID = setTimeout(() => {
        unflipCard(firstCardRefObj.current);
        unflipCard(secondCardRefObj.current);
        resetCardsRefObj();
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
        setIsLockBoard(true); // to avoid keeping click other cards after the second card is flipped.
        checkForMatch();
      }
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerID); // if the component will be destroyed, we need to clear the setTimeout function for better performance.
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

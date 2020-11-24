import React from 'react';

import styles from './Card.module.scss';

const Card = ({ imgSrc, isShowed, onClick }) => {
  return (
    <div
      className={`${styles['card']} ${isShowed ? styles['show'] : ''}`}
      onClick={onClick}
    >
      <img src={isShowed ? imgSrc : null} className={styles['img']} />
    </div>
  );
};

export default Card;

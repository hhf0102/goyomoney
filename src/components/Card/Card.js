import React from 'react';

import styles from './Card.module.scss';

const Card = ({ imgSrc, isShowed, onClick }) => {
  return (
    <div className={styles['card']} onClick={onClick}>
      <img src={isShowed ? imgSrc : null} />
    </div>
  );
};

export default Card;

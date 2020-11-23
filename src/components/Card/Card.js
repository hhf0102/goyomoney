import React from 'react';

import styles from './Card.module.scss';

const Card = ({ imgSrc, isShowed, onClick }) => {
  return (
    <div
      className={styles['card']}
      style={{ backgroundImage: isShowed ? `url(${imgSrc})` : 'none' }}
      onClick={onClick}
    ></div>
  );
};

export default Card;

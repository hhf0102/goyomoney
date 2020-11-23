import React, { useState } from 'react';

import styles from './Card.module.scss';

const Card = ({ imgSrc }) => {
  const [showImg, setShowImg] = useState(false);

  const handleShowImg = () => {
    setShowImg(true);
    setTimeout(() => {
      setShowImg(false);
    }, 1000);
  };

  return (
    <div
      className={styles['card']}
      style={{ backgroundImage: showImg ? `url(${imgSrc})` : 'none' }}
      onClick={handleShowImg}
    ></div>
  );
};

export default Card;

import React, {useEffect, useState} from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

export default () => { 

  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeight(window.pageYOffset);
    });
    return () => window.removeEventListener('scroll', () => {});
  });

  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }
  return <button className={height > 100?"scroll-btn show-scroll-btn" : "scroll-btn"} onClick={scrollBackToTop}><FaAngleDoubleUp></FaAngleDoubleUp></button>;
};


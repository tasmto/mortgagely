import React, { useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './style.scss';

type Props = {};

const Stars = ({}: Props) => {
  const [hoverStars, setHoverStars] = useState(false);
  const transitions = {
    typeOne: {
      type: 'spring',
      bounce: 0.25,

      repeat: Infinity,
      repeatType: 'reverse',
    },
  };
  return (
    <motion.div
      onMouseEnter={() => setHoverStars(true)}
      onMouseLeave={() => setHoverStars(false)}
      className='container-fluid animated-stars--container px-0'
    >
      {/* BG */}
      <motion.div
        className='fluid  px-0'
        animate={{ opacity: [1, 1], scale: [1, 1.04] }}
        transition={{
          type: 'spring',
          bounce: 0.25,
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 2,
        }}
      >
        <svg
          fill='none'
          viewBox='0 0 800 589'
          xmlns='http://www.w3.org/2000/svg'
          className={`stars-background ${hoverStars && 'hover'}`}
        >
          <g clipPath='url(#e)'>
            <path
              d='m713.51 315.53c-3.486 40.264-21.039 79.173-46.078 111.35-1.046 1.346-2.106 2.68-3.177 4.001-2.412 2.972-4.886 5.888-7.422 8.748-3.103 3.523-6.296 6.966-9.58 10.328-2.673 2.766-5.408 5.474-8.206 8.122-2.159 2.065-4.343 4.09-6.552 6.075-26.572 24.011-57.097 43.825-88.548 61.154-61.378 33.806-128.65 59.415-198.63 63.144-69.967 3.72-143.01-16.318-194.32-64.041-69.154-64.313-88.455-171.58-60.378-261.75 18.674-59.985 56.789-114.25 108.66-149.69 51.424-35.133 116.3-50.947 177.7-40.61 49.012-29.787 113.18-30.357 166.46-8.309 28.432 11.767 53.948 29.264 76.332 50.405 10.252 9.703 19.844 20.079 28.713 31.059 0.906 1.112 1.804 2.234 2.691 3.364 3.72 4.702 7.319 9.5 10.796 14.394 4.991 7.019 9.729 14.194 14.216 21.525 1.233 2.019 2.458 4.047 3.654 6.094 0.804 1.374 1.617 2.757 2.411 4.15 0.018 0.028 0.031 0.06 0.038 0.093 12.44 21.88 22.609 45.228 27.908 69.631 0.935 4.318 1.72 8.655 2.328 13.029v9e-3c0.532 3.711 0.934 7.44 1.205 11.188 0.639 8.836 0.567 17.71-0.215 26.535z'
              fill='url(#f)'
            />
          </g>
          <defs>
            <linearGradient
              id='f'
              x1='396.18'
              x2='396.18'
              y1='48.625'
              y2='588.89'
              gradientUnits='userSpaceOnUse'
            >
              <stop
                stopColor={!hoverStars ? '#4F3A2E' : '#D89068'}
                offset='0'
              />
              <stop
                stopColor={!hoverStars ? '#0D0B0B' : '#65493A'}
                offset='1'
              />
            </linearGradient>
            <clipPath id='e'>
              <rect width='800' height='588.89' fill='#fff' />
            </clipPath>
          </defs>
        </svg>
      </motion.div>

      {/* Moon Shadow */}
      <motion.img
        className='fluid'
        src='assets/img/stars/stars-10.svg'
        animate={{ scale: [1, 1.04] }}
        transition={{
          type: 'tween',
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Stars */}
      <motion.img
        className='fluid stars'
        src='assets/img/stars/stars-01.svg'
        animate={{ opacity: hoverStars ? [0.4, 0.2, 0.6] : [0.6, 0.8, 1] }}
        transition={{
          type: 'tween',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Moon */}
      <motion.img
        className='fluid'
        src='assets/img/stars/stars-03.svg'
        animate={{
          y: !hoverStars ? [-3, 3] : [25, 35],
          x: !hoverStars ? [0, 0] : [-10, -15],
          scale: !hoverStars ? [1, 1] : [0.8, 0.76],
        }}
        transition={{
          type: 'tween',
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      {/* Face (Head) */}
      <motion.img
        className='fluid'
        src='assets/img/stars/stars-04.svg'
        animate={{
          y: !hoverStars ? [-5, 0] : [-15, -10],
          x: !hoverStars ? [0, 0] : [-10, -15],
          scale: hoverStars ? [1.05, 1.07] : [1, 1],
        }}
        transition={{
          type: 'tween',
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      {/* Face (Eyes) */}
      <motion.img
        className='fluid'
        src={
          hoverStars
            ? 'assets/img/stars/stars-06.svg'
            : 'assets/img/stars/stars-05.svg'
        }
        animate={{
          y: !hoverStars ? [-5, 0] : [-15, -10],
          x: !hoverStars ? [0, 0] : [-10, -15],
          scale: hoverStars ? [1.05, 1.07] : [1, 1],
        }}
        transition={{
          type: 'tween',
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Planet Belt 1 */}
      <motion.img
        className='fluid'
        src='assets/img/stars/stars-08.svg'
        animate={{
          scale: !hoverStars ? [1.05, 1.1] : [1, 1],
          rotate: !hoverStars ? [10, -15] : [5, 0],
        }}
        transition={{
          type: 'tween',
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      {/* Planet Belt 2 */}
      <motion.img
        className='fluid'
        src='assets/img/stars/stars-09.svg'
        animate={{
          scale: !hoverStars ? [1.05, 1.1] : [1, 1],
          rotate: !hoverStars ? [-15, 10] : [0, 5],
        }}
        transition={{
          type: 'tween',
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      {/* Distant Planets */}
      <motion.img
        className='fluid '
        src='assets/img/stars/stars-02.svg'
        animate={
          hoverStars
            ? {
                scale: [1, 0.97],
                y: [-30, 0],
                rotate: [0, 10],
              }
            : {
                scale: [0.99, 1.01],
                y: [-10, 1],
                rotate: [5, 0],
              }
        }
        transition={{
          type: 'tween',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </motion.div>
  );
};

export default Stars;

import React, { useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './style.scss';

type Props = {};

const Rocket = ({}: Props) => {
  const [hoverRocket, setHoverRocket] = useState(false);
  const [clickRocket, setClickRocket] = useState(false);
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
      drag={true}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.2}
      onMouseEnter={() => setHoverRocket(true)}
      onMouseLeave={() => setHoverRocket(false)}
      onDragEnd={() => setClickRocket(false)}
      onDragStart={() => setClickRocket(true)}
      className='container-fluid animated-rocket--container'
    >
      {/* BG */}
      <motion.div
        className='fluid'
        animate={{ opacity: [1, 1], scale: [0.99, 1.01], y: [0, 3] }}
        transition={{
          ...transitions.typeOne,
          duration: 3,
        }}
      >
        <svg
          fill='none'
          viewBox='0 0 800 733'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          className={`rocket-background ${
            (hoverRocket || clickRocket) && 'hover'
          }`}
        >
          <g clipPath='url(#b)'>
            <path
              d='m142.41 216.1c14.996-41.043 38.397-78.501 68.706-109.98 25.714-26.695 65.734-25.585 65.734-25.585l0.229-0.2837c9.632-11.878 22.557-20.646 37.154-25.206 14.596-4.5598 30.214-4.7076 44.895-0.4248 3.815 1.095 6.75 1.5803 8.146 1.0926 25.449-8.9068 24.254-29.01 46.21-45.205 38.445-28.357 165.96 4.1253 183.94 56.305 14.574 42.291 79.627 62.789 103.93 95.138 3.8 5.058 7.529 10.175 11.186 15.35 1.714 2.405 3.41 4.827 5.086 7.268 17.219 24.936 32.667 51.05 46.229 78.15 8.893 17.706 16.622 35.972 23.138 54.684 25.346 74.096 16.679 129.3-53.209 115.66-8.273-1.618-16.347-3.067-24.222-4.344-11.405-1.862-22.411-3.391-33.02-4.589-14.286-1.624-27.877-2.689-40.773-3.193-4.337-0.175-8.593-0.292-12.771-0.351-61.763-0.856-107.58 10.768-142.48 28.813-5.916 3.051-11.523 6.279-16.82 9.684-8.09 5.171-15.815 10.894-23.12 17.126-10.109 8.675-19.43 18.226-27.856 28.543l-0.463 0.567c-40.822 49.933-54.257 105.21-82.653 114.94-121.39 41.613-198.16-109.24-206.03-256.8-0.397-7.436-0.617-14.85-0.659-22.243-0.024-3.305-8e-3 -6.601 0.049-9.888 0.125-8.576 0.503-17.096 1.136-25.513 0.236-3.219 0.51-6.42 0.822-9.604 0.344-3.434 0.718-6.847 1.151-10.239 3.088-24.864 8.49-48.519 16.328-69.883z'
              fill='url(#a)'
            />
          </g>
          <defs>
            <linearGradient
              id='a'
              x1='461.46'
              x2='461.46'
              y2='627.28'
              gradientUnits='userSpaceOnUse'
            >
              <stop
                stopColor={!hoverRocket && !clickRocket ? '#D9936A' : '#4F3A2E'}
                offset='0'
              />
              <stop
                stopColor={!hoverRocket && !clickRocket ? '#BF4F36' : '#BF4F36'}
                offset='1'
              />
            </linearGradient>
            <clipPath id='b'>
              <rect width='800' height='732.44' fill='#fff' />
            </clipPath>
          </defs>
        </svg>
      </motion.div>
      {/* Stars */}
      <motion.img
        className='fluid'
        src='assets/img/rocket/rocket-01.svg'
        animate={{ opacity: [0.4, 0.6, 1] }}
        transition={{
          ...transitions.typeOne,
          duration: 2,
        }}
      />
      {/* Rocket */}
      <motion.img
        className='fluid rocket'
        src='assets/img/rocket/rocket-02.svg'
        initial={{ rotate: [45] }}
        animate={
          hoverRocket || clickRocket
            ? {
                scale: [1, 0.97],
                y: [-60, -30],
                x: [
                  -10, -7, -10, -7, -10, -7, -10, -7, -10, -7, -10, -7, -10, -7,
                  -10, -7, -10, -5, -10, -5, -10, -5, -10, -5, -10, -5, -10, -5,
                  -10, -5, -10, -5, -10, -5,
                ],
                rotate: [25, 35],
              }
            : {
                scale: [0.99, 1.01],
                y: [-50, -35],
                x: [-1.5, 1, -1, 1, 1, -2, 1, 1],
                rotate: [0, 0],
              }
        }
        transition={{
          type: 'tween',
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      {/* Planets */}
      <motion.img
        className='fluid'
        src='assets/img/rocket/rocket-03.svg'
        animate={{
          y: !hoverRocket && !clickRocket ? [-5, 5] : [85, 40],
          x: !hoverRocket && !clickRocket ? [0, 0] : [25, 25],
          rotate: !hoverRocket && !clickRocket ? [3, -3] : [-1, 1],
        }}
        transition={{
          ...transitions.typeOne,
          duration: 6,
          ease: 'linear',
        }}
      />
    </motion.div>
  );
};

export default Rocket;

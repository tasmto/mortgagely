import React, { useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './style.scss';

type Props = {};

const Phone = ({}: Props) => {
  const [hoverRocket, setHoverRocket] = useState(false);
  const transitions = {
    typeOne: {
      type: 'spring',
      bounce: 0.25,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  };
  return (
    <Container fluid className='w-100 px-0 animated-mobile--container'>
      {/* Background */}
      <motion.img
        className='fluid'
        src='assets/img/mobile/mobile-00.svg'
        animate={{ opacity: [0.95, 1] }}
        transition={{
          type: 'spring',
          bounce: 0.25,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Line 2 */}
      <motion.img
        className='fluid'
        src='assets/img/mobile/mobile-01.svg'
        animate={{
          y: [20, -20, -20, 0, 0, 0, 0, 20, 20, -20],
          opacity: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        }}
        transition={{
          type: 'tween',
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      {/* Line 1 */}
      <motion.img
        className='fluid events '
        src='assets/img/mobile/mobile-02.svg'
        animate={{
          y: [20, -20, 0, 0, 0, 0, 0, 0, 20, -20],
          opacity: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        }}
        transition={{
          type: 'tween',
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      {/* Header */}
      <motion.img
        className='fluid'
        src='assets/img/mobile/mobile-03.svg'
        animate={{
          y: [20, -20, 0, 0, 0, 0, 0, 0, 20, -20],
          opacity: [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        }}
        transition={{
          type: 'tween',
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </Container>
  );
};

export default Phone;

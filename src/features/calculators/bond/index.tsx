import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AdvancedBondResults from './AdvancedBondResults';
import BondCalculator from './BondCalculator';
import BondCalculatorResults from './BondCalculatorResults';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { AnimatePresence, motion } from 'framer-motion';

const BondCalculatorComponent = () => {
  const advancedToggled = useSelector((state: any) => state.layout.advanced);
  return (
    <Row className='px-0 gy-5 gy-md-0 mt-0  justify-content-center align-items-start'>
      <Col md={6} lg={5} className='mt-0'>
        <AnimatePresence>
          <motion.div
            key='calc'
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0,
              duration: 0.5,
            }}
          >
            <BondCalculator />
          </motion.div>
        </AnimatePresence>
      </Col>
      <Col md={6} lg={7} className='pe-0 '>
        <AnimatePresence exitBeforeEnter>
          {advancedToggled ? (
            <motion.div
              key='advanced'
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              transition={{
                type: '',
                stiffness: 100,
                delay: 0,
                duration: 0.5,
              }}
            >
              <AdvancedBondResults />
            </motion.div>
          ) : (
            <motion.div
              key='simple'
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{
                type: '',
                stiffness: 100,
                delay: 0,
                duration: 0.4,
              }}
            >
              <BondCalculatorResults />
            </motion.div>
          )}
        </AnimatePresence>
      </Col>
    </Row>
  );
};

export default BondCalculatorComponent;

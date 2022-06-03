import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AdvancedResults from './AdvancedResults';
import SavingsCalculator from './SavingsCalculator';
import SavingsCalculatorResults from './SavingsCalculatorResults';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { AnimatePresence, motion } from 'framer-motion';

const SavingsCalculatorComponent = () => {
  const advancedToggled = useSelector(
    (state: RootState) => state.layout.advanced
  );
  return (
    <Row className='px-0 gy-5 gy-lg-0 mt-0  justify-content-center align-items-start'>
      <Col md={12} lg={6} className='mt-0'>
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
            <SavingsCalculator />
          </motion.div>
        </AnimatePresence>
      </Col>
      <Col md={12} lg={6} className='pe-0 ps-0 ps-lg-4 '>
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
              <AdvancedResults />
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
              <SavingsCalculatorResults />
            </motion.div>
          )}
        </AnimatePresence>
      </Col>
    </Row>
  );
};

export default SavingsCalculatorComponent;

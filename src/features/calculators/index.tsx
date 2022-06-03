import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CalculatorSelector from './selector';
import { useSearchParams } from 'react-router-dom';
import BondCalculatorComponent from './bond';
import CalculatorSelectorBreadcrumbs from './selector/CalculatorSelectorBreadcrumbs';
import { store } from './store';
import { Provider } from 'react-redux';
import AdvancedViewToggle from './selector/AdvancedViewToggle';
import { AnimatePresence, motion } from 'framer-motion';
import SavingsCalculatorComponent from './depositSavings';
import RentCalculatorComponent from './occupational-rent';

type Props = {};

const Calculator = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCalculator, setActiveCalculator] = useState('');

  useEffect(() => {
    setActiveCalculator(searchParams.get('type') || '');
  }, [searchParams]);

  return (
    <Provider store={store}>
      <Row className='row gx-5 justify-content-center align-items-stretch bg-gradient-primary-to-secondary px-5 py-5 mx-auto shadow calculator-container--outer'>
        <Row className='ps-0'>
          <Col className=''>
            <CalculatorSelectorBreadcrumbs active={activeCalculator} />
          </Col>
          {!activeCalculator ||
            (activeCalculator !== '' && (
              <Col sm='auto'>
                <AdvancedViewToggle />
              </Col>
            ))}
        </Row>

        <AnimatePresence exitBeforeEnter>
          {activeCalculator === 'bond' ? (
            <motion.div
              key='simple'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: 'none',
                stiffness: 100,
                delay: 0,
              }}
            >
              <BondCalculatorComponent />
            </motion.div>
          ) : activeCalculator === 'deposit-savings' ? (
            <motion.div
              key='simple'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: 'none',
                stiffness: 100,
                delay: 0,
              }}
            >
              <SavingsCalculatorComponent />
            </motion.div>
          ) : activeCalculator === 'occupational-rent' ? (
            <motion.div
              key='sdsdsd'
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 0, opacity: 0 }}
              transition={{
                type: 'none',
                stiffness: 100,
                delay: 0,
              }}
            >
              <RentCalculatorComponent />
            </motion.div>
          ) : (
            <motion.div
              key='sdsd'
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 0, opacity: 0 }}
              transition={{
                type: 'none',
                stiffness: 100,
                delay: 0,
              }}
            >
              <CalculatorSelector />
            </motion.div>
          )}
        </AnimatePresence>
      </Row>
    </Provider>
  );
};

export default Calculator;

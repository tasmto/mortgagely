import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CalculatorSelector from './selector';
import { useSearchParams } from 'react-router-dom';
import BondCalculatorComponent from './bond';
import CalculatorSelectorBreadcrumbs from './selector/CalculatorSelectorBreadcrumbs';

type Props = {};

const Calculator = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCalculator, setActiveCalculator] = useState('');
  useEffect(() => {
    setActiveCalculator(searchParams.get('type') || '');
  }, [searchParams]);
  return (
    <Row className='row gx-5 justify-content-center align-items-stretch bg-gradient-primary-to-secondary px-5 py-5 mx-auto shadow'>
      {!activeCalculator ||
        (activeCalculator !== '' && (
          <CalculatorSelectorBreadcrumbs active={activeCalculator} />
        ))}
      {activeCalculator === 'bond' ? (
        <BondCalculatorComponent />
      ) : (
        <CalculatorSelector />
      )}
    </Row>
  );
};

export default Calculator;

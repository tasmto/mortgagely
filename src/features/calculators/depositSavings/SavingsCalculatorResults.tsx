import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
// @ts-ignore: Could not find a declaration file for module
import { FormatCurrency } from '../../../utilities/FormatNumber';

type Props = {};

const SavingsCalculatorResults = (props: Props) => {
  const { total, monthlyGains, timeTillGoal } = useSelector(
    (state: RootState) => state.savings.calculations.current
  );
  const { goal, months } = useSelector((state: RootState) => state.savings);
  return (
    <Container
      as={Row}
      className='align-items-center justify-content-center h-100 pe-0 '
    >
      <Col xs={12} className='p-0'>
        <h4 className='h2 fs-4 text-white mb-0'>
          Total gains after {months} month(s)
        </h4>
        <p className='display-5 f-alt text-white font-alt'>
          {FormatCurrency(total)}
        </p>

        <h4 className='h2 fs-4 text-white text-white mb-0'>Monthly gains</h4>
        <p className='display-5 text-white f-alt font-alt'>
          {FormatCurrency(monthlyGains)}
        </p>
        <h5 className='h3 fs-5 text-light mb-0'>
          Time it will take you till your goal
        </h5>
        <p className='display-6 f-alt text-light font-alt'>
          {timeTillGoal} month(s)
        </p>
      </Col>
      <small className='text-white ps-0'>
        * Compound interest applied monthly (South African standard).
      </small>
    </Container>
  );
};

export default SavingsCalculatorResults;

import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
// @ts-ignore: Could not find a declaration file for module
import { FormatCurrency } from '../../../utilities/FormatNumber';

type Props = {};

const BondCalculatorResults = (props: Props) => {
  const { years, monthlyRepayments, total } = useSelector(
    (state: RootState) => state.bond.calculations.current
  );
  const { price } = useSelector((state: RootState) => state.bond);
  return (
    <Container
      as={Row}
      className='align-items-center justify-content-center h-100 pe-0 '
    >
      <Col xs={12} className='p-0'>
        <h4 className='h2 fs-4 text-white mb-0'>Your monthly repayments</h4>
        <p className='display-5 f-alt text-white font-alt'>
          {FormatCurrency(monthlyRepayments)}
        </p>

        <h4 className='h2 fs-4 text-white text-white mb-0'>
          Total amount repayable
        </h4>
        <p className='display-5 text-white f-alt font-alt'>
          {FormatCurrency(total)}
        </p>
        <h5 className='h3 fs-5 text-light mb-0'>
          Difference (what you pay for the loan)
        </h5>
        <p className='display-6 f-alt text-light font-alt'>
          {FormatCurrency(Math.abs(total - price))}
        </p>
      </Col>
      <small className='text-white ps-0'>
        * Meant to be used as a rough guide
      </small>
    </Container>
  );
};

export default BondCalculatorResults;

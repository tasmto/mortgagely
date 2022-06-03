import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
// @ts-ignore: Could not find a declaration file for module
import { FormatCurrency } from '../../../utilities/FormatNumber';

type Props = {};

const RentCalculatorResults = (props: Props) => {
  const { totalGained, total } = useSelector(
    (state: any) => state.rent.calculations.current
  );
  const { months } = useSelector((state: any) => state.rent);
  return (
    <Container
      as={Row}
      className='align-items-center justify-content-center h-100 pe-0 '
    >
      <Col xs={12} className='p-0'>
        <h4 className='h2 fs-4 text-white mb-0'>Your monthly gains</h4>
        <p className='display-5 f-alt text-white font-alt'>
          {FormatCurrency(totalGained / months || 0)}
        </p>

        <h4 className='h2 fs-4 text-white text-white mb-0'>Total rent paid</h4>
        <p className='display-5 text-white f-alt font-alt'>
          {FormatCurrency(total)}
        </p>
        <h5 className='h3 fs-5 text-light mb-0'> Total amount gained </h5>
        <p className='display-6 f-alt text-light font-alt'>
          {FormatCurrency(totalGained)}
        </p>
      </Col>
      <small className='text-white ps-0'>
        * Meant to be used as a rough guide
      </small>
    </Container>
  );
};

export default RentCalculatorResults;

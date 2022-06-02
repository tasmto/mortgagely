import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

type Props = {};

const BondCalculatorResults = (props: Props) => {
  return (
    <Container
      as={Row}
      className='align-items-center justify-content-center h-100 pe-0 '
    >
      <Col xs={12} className='p-0'>
        <h4 className='h2 fs-4 text-white mb-0'>Your monthly repayments</h4>
        <p className='display-5 f-alt text-white font-alt'>R 000 000.00</p>

        <h4 className='h2 fs-4 text-white text-white mb-0'>
          Total amount repayable
        </h4>
        <p className='display-5 text-white f-alt font-alt'>R 000 000.00</p>
      </Col>
      <small className='text-white'>* Meant to be used as a rough guide</small>
    </Container>
  );
};

export default BondCalculatorResults;

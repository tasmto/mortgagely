import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AdvancedBondResults from './AdvancedBondResults';
import BondCalculator from './BondCalculator';
import BondCalculatorResults from './BondCalculatorResults';

type Props = {};

const BondCalculatorComponent = (props: Props) => {
  return (
    <Row className='px-0 gy-5 gy-md-0 mt-0  justify-content-center align-items-start'>
      <Col md={6} lg={5} className='mt-0'>
        <BondCalculator />
      </Col>
      <Col md={6} lg={7} className='pe-0'>
        {/* <BondCalculatorResults /> */}
        <AdvancedBondResults />
      </Col>
    </Row>
  );
};

export default BondCalculatorComponent;

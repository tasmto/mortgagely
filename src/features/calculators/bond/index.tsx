import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BondCalculator from './BondCalculator';
import BondCalculatorResults from './BondCalculatorResults';

type Props = {};

const BondCalculatorComponent = (props: Props) => {
  return (
    <Row>
      <Col md={6}>
        <BondCalculator />
      </Col>
      <Col md={6}>
        <BondCalculatorResults />
      </Col>
    </Row>
  );
};

export default BondCalculatorComponent;

import React from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import { FiPercent, FiHome, FiCreditCard, FiCalendar } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';

type Props = {};

const CalculatorSelector = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    setSearchParams({ type: e.currentTarget.id });
  };

  return (
    <>
      <Col md={6} lg={7} className='order-2 order-md-0'>
        <ListGroup>
          <Row className='justify-content-stretch display-block d-block'>
            <Row className='g-1 justify-content-stretch'>
              <Col lg={6} className='h-100'>
                <ListGroup.Item
                  className='bg-transparent link h-100 checked'
                  id='bond'
                  onClick={handleClick}
                >
                  <Button
                    variant='outline-light'
                    size='lg'
                    className=' w-100 rounded h-100 '
                  >
                    <Row className='justify-content-start g-2 align-items-center'>
                      <Col xs='auto'>
                        <FiHome className='calculator-button--icon ' />
                      </Col>
                      <Col className='text-start'>
                        <h4 className='fs-6 fw-bold mb-1'>
                          Bond Repayment Calculator
                        </h4>
                      </Col>
                    </Row>
                  </Button>
                </ListGroup.Item>
              </Col>
              <Col lg={6} className='h-100'>
                <ListGroup.Item
                  className='bg-transparent link h-100'
                  id='transfer-costs'
                  onClick={handleClick}
                >
                  <Button
                    variant='outline-light'
                    size='lg'
                    className=' w-100 rounded h-100'
                  >
                    <Row className='justify-content-start g-2 align-items-center'>
                      <Col xs='auto'>
                        <FiPercent className='calculator-button--icon ' />
                      </Col>
                      <Col className='text-start'>
                        <h4 className='fs-6 fw-bold mb-1'>
                          Transfer Costs Calculator
                        </h4>
                      </Col>
                    </Row>
                  </Button>
                </ListGroup.Item>
              </Col>
            </Row>
            <Row className='g-1'>
              <Col lg={6} className='h-100'>
                <ListGroup.Item
                  className='bg-transparent link h-100'
                  id='deposit-savings'
                  onClick={handleClick}
                >
                  <Button
                    variant='outline-light'
                    size='lg'
                    className=' w-100 rounded h-100'
                  >
                    <Row className='justify-content-start g-2 align-items-center'>
                      <Col xs='auto'>
                        <FiCalendar className='calculator-button--icon ' />
                      </Col>
                      <Col className='text-start'>
                        <h4 className='fs-6 fw-bold mb-1'>
                          Deposit Savings Calculator
                        </h4>
                      </Col>
                    </Row>
                  </Button>
                </ListGroup.Item>
              </Col>
              <Col lg={6} className='h-100'>
                <ListGroup.Item
                  className='bg-transparent link h-100'
                  id='extra-payments'
                  onClick={handleClick}
                >
                  <Button
                    variant='outline-light'
                    size='lg'
                    className=' w-100 rounded h-100 '
                  >
                    <Row className='justify-content-start g-2 align-items-center'>
                      <Col xs='auto'>
                        <FiCreditCard className='calculator-button--icon ' />
                      </Col>
                      <Col className='text-start'>
                        <h4 className='fs-6 fw-bold mb-1'>
                          Extra Payments Calculator
                        </h4>
                      </Col>
                    </Row>
                  </Button>
                </ListGroup.Item>
              </Col>
            </Row>
          </Row>
        </ListGroup>
        {/* //!https://www.ooba.co.za/home-loan/bond-repayment-calculator/ */}
      </Col>
      <Col md={6} lg={5} className=' mb-3 mb-md-0 order-1'>
        <h2 className='h2 fs-1 text-white mb-4'>
          Choose the type of calculator you want to use.
        </h2>
        <small className='text-white'>
          * Meant to be used as a rough guide
        </small>
      </Col>
    </>
  );
};

export default CalculatorSelector;

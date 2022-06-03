import React from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import { FiDollarSign, FiHome, FiCreditCard, FiCalendar } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';

type Props = {};

const CalculatorSelector = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    setSearchParams({ type: e.currentTarget.id });
  };

  return (
    <Row>
      <Col md={6} lg={7} className='order-2 order-md-0 ps-md-2'>
        <ListGroup>
          <Row className='justify-content-stretch display-block d-block'>
            <Row className='g-1 justify-content-stretch'>
              <Col lg={12} className='h-100'>
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
              <Col lg={12} className='h-100'>
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
              <Col lg={12} className='h-100'>
                <ListGroup.Item
                  className='bg-transparent link h-100'
                  id='occupational-rent'
                  onClick={handleClick}
                >
                  <Button
                    variant='outline-light'
                    size='lg'
                    className=' w-100 rounded h-100'
                  >
                    <Row className='justify-content-start g-2 align-items-center'>
                      <Col xs='auto'>
                        <FiDollarSign className='calculator-button--icon ' />
                      </Col>
                      <Col className='text-start'>
                        <h4 className='fs-6 fw-bold mb-1'>
                          Occupational rent calculator
                        </h4>
                      </Col>
                    </Row>
                  </Button>
                </ListGroup.Item>
              </Col>
            </Row>
          </Row>
        </ListGroup>
      </Col>
      <Col md={6} lg={5} className=' mb-3 mb-md-0 order-1'>
        <h2 className='h2 fs-1 text-white mb-4'>
          Choose the type of calculator you want to use.
        </h2>
        <p className='text-white'>
          This tool is meant to be used as a rough guide. Inspired by{' '}
          <a
            href='https://www.ooba.co.za/'
            target='_blank'
            rel='no-refer'
            className='text-white'
          >
            <strong>Ooba</strong>
          </a>
          . * Special thanks to the{' '}
          <a
            href='https://www.youtube.com/c/CoderFoundryBootcamp'
            target='_blank'
            rel='no-refer'
            className='text-white'
          >
            <strong>Coder Foundry's YouTube channel</strong>
          </a>{' '}
          for the suggestion.
        </p>
      </Col>
    </Row>
  );
};

export default CalculatorSelector;

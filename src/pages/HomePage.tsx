import React from 'react';
import {
  ButtonGroup,
  Button,
  Container,
  Image,
  Row,
  Col,
  ListGroup,
} from 'react-bootstrap';
import { FiFeather, FiAward } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Phone from '../features/animatedImages/phone';
import DeveloperDetailsBlocks from '../features/developer/DeveloperDetailsBlocks';
import HomePageHero from '../features/heros/HomepageHero';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Container>
      <HomePageHero />

      <Container fluid as='section' className='px-0 pb-0' id='calculator'>
        <Row className='row gx-5 justify-content-center align-items-stretch bg-gradient-primary-to-secondary px-5 py-5 mx-auto shadow'>
          <Col md={6} lg={7}>
            <ListGroup>
              <Row>
                <Row className='g-1'>
                  <Col lg={6}>
                    <ListGroup.Item className='bg-transparent link'>
                      <Button
                        variant='outline-light'
                        size='lg'
                        className=' w-100 rounded'
                      >
                        <Row className='justify-content-start g-2'>
                          <Col xs='auto'>
                            <FiFeather className='calculator-button--icon ' />
                          </Col>
                          <Col className='text-start'>
                            <h4 className='fs-6 fw-bold mb-1'>Second radio</h4>
                            <small className='lh-1'>
                              Some other text goes here
                            </small>
                          </Col>
                        </Row>
                      </Button>
                    </ListGroup.Item>
                  </Col>
                  <Col lg={6}>
                    <ListGroup.Item className='bg-transparent link'>
                      <Button
                        variant='outline-light'
                        size='lg'
                        className=' w-100 rounded'
                      >
                        <Row className='justify-content-start g-2'>
                          <Col xs='auto'>
                            <FiAward className='calculator-button--icon ' />
                          </Col>
                          <Col className='text-start'>
                            <h4 className='fs-6 fw-bold mb-1'>Second radio</h4>
                            <small className='lh-1'>
                              Some other text goes here
                            </small>
                          </Col>
                        </Row>
                      </Button>
                    </ListGroup.Item>
                  </Col>
                </Row>
                <Row className='g-1'>
                  <Col lg={6}>
                    <ListGroup.Item className='bg-transparent link'>
                      <Button
                        variant='outline-light'
                        size='lg'
                        className=' w-100 rounded'
                      >
                        <Row className='justify-content-start g-2'>
                          <Col xs='auto'>
                            <FiFeather className='calculator-button--icon ' />
                          </Col>
                          <Col className='text-start'>
                            <h4 className='fs-6 fw-bold mb-1'>Second radio</h4>
                            <small className='lh-1'>
                              Some other text goes here
                            </small>
                          </Col>
                        </Row>
                      </Button>
                    </ListGroup.Item>
                  </Col>
                  <Col lg={6}>
                    <ListGroup.Item className='bg-transparent link'>
                      <Button
                        variant='outline-light'
                        size='lg'
                        className=' w-100 rounded'
                      >
                        <Row className='justify-content-start g-2'>
                          <Col xs='auto'>
                            <FiAward className='calculator-button--icon ' />
                          </Col>
                          <Col className='text-start'>
                            <h4 className='fs-6 fw-bold mb-1'>Second radio</h4>
                            <small className='lh-1'>
                              Some other text goes here
                            </small>
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
          <Col md={6} lg={5} className=' sticky-top'>
            <h2 className='h2 fs-1 text-white mb-4'>
              Choose the type of calculator you want to use.
            </h2>
            <small className='text-white'>
              * Meant to be used as a rough guide
            </small>
          </Col>
        </Row>
      </Container>

      <section id='faq'>
        <Container as={Row} className=' px-5 gx-5 align-items-center'>
          <Container
            fluid
            as={Col}
            lg={8}
            className=' order-lg-1  mb-lg-0 px-5'
          >
            <Row className=' gx-5'>
              <Col as='article' md={6} className=' mb-5'>
                <i className='bi-phone icon-feature text-gradient d-block mb-3'></i>
                <h3 className='font-alt '>Shop with complete confidence</h3>
                <p className='text-muted mb-0'>
                  Knowing your credit score allows you to address any issues
                  before applying for a home loan.
                </p>
              </Col>
              <Col as='article' md={6} className=' mb-5'>
                <i className='bi-camera icon-feature text-gradient d-block mb-3'></i>
                <h3 className='font-alt '>Know how much you can afford</h3>
                <p className='text-muted mb-0'>
                  We consider your financial information in the same way a bank
                  would, to give you an accurate assessment of what you can
                  afford.
                </p>
              </Col>
            </Row>
            <Row>
              <Col as='article' md={6} className=' mb-5'>
                <i className='bi-gift icon-feature text-gradient d-block mb-3'></i>
                <h3 className='font-alt '>Get the competitive advantage</h3>
                <p className='text-muted mb-0'>
                  Sellers are more likely to accept an offer from someone who
                  has proof that they can afford to buy.
                </p>
              </Col>
              <Col as='article' md={6} className=' mb-5'>
                <i className='bi-patch-check icon-feature text-gradient d-block mb-3'></i>
                <h3 className='font-alt '>Sign with absolute confidence</h3>
                <p className='text-muted mb-0'>
                  Pre-approval protects you from putting in an offer on a
                  property you can't afford. Why risk disappointment?
                </p>
              </Col>
            </Row>
          </Container>
          <Col lg={4} className='d-none d-lg-block  order-lg-0'>
            <div className='features-device-mockup'>
              <Phone />
            </div>
          </Col>
        </Container>
      </section>

      <section className='bg-light border' id='about'>
        <div className='container px-5'>
          <div className='row gx-5 align-items-center justify-content-center justify-content-lg-between'>
            <div className='col-12 col-lg-5'>
              <h2 className='display-4 lh-1 mb-4'>
                Knowledge is very much power
              </h2>
              <p className='lead fw-normal text-muted mb-5 mb-lg-0'>
                For a more detailed view of your particular requirements based
                on your personal financial circumstances, please contact your
                nearest specialist.
              </p>
            </div>
            <div className='col-sm-8 col-md-6'>
              <div className='px-5 px-sm-0'>
                <Image fluid src='assets/img/stars.svg' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <DeveloperDetailsBlocks />
    </Container>
  );
};

export default HomePage;

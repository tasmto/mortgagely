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
import { Link } from 'react-router-dom';
import Phone from '../features/animatedImages/phone';
import Stars from '../features/animatedImages/stars';
import Calculator from '../features/calculators';
import DeveloperDetailsBlocks from '../features/developer/DeveloperDetailsBlocks';
import HomePageHero from '../features/heros/HomepageHero';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Container>
      <HomePageHero />

      <Container fluid as='section' className='px-0 pb-0' id='calculator'>
        <Calculator />
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
        <Container fluid className=' px-5'>
          <Row className='gx-5 align-items-center justify-content-center justify-content-lg-between'>
            <Col xs={12} lg={6}>
              <h2 className='display-4 lh-1 mb-4'>
                Knowledge is very much power
              </h2>
              <p className='lead fw-normal text-muted mb-0'>
                For a more detailed view of your particular requirements based
                on your personal financial circumstances, please contact your
                nearest specialist.
              </p>
            </Col>
            <Col
              xs={12}
              sm={10}
              lg={5}
              className='px-5 px-sm-0 d-none d-lg-block '
            >
              <Stars />
            </Col>
          </Row>
        </Container>
      </section>
      <DeveloperDetailsBlocks />
    </Container>
  );
};

export default HomePage;

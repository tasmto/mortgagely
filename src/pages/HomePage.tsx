import React from 'react';
import '../css/styles.css';
import { ButtonGroup, Container, Image, Row, Col } from 'react-bootstrap';
import Navbar from '../features/header';
import Footer from '../features/footer';
import { Link } from 'react-router-dom';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Container id='page-top'>
      <Navbar />

      <header className='masthead'>
        <div className='container px-5'>
          <div className='row gx-5 align-items-center'>
            <div className='col-lg-6'>
              <div className='mb-5 mb-lg-0 text-center text-lg-start'>
                <h1 className='display-1 lh-1 mb-3'>
                  Mortgage payment calculator.
                </h1>
                <p className='lead fw-normal text-muted mb-4'>
                  Please note that this tool is only to be used as a rough
                  guide...
                </p>
                <ButtonGroup>
                  <Link
                    className='btn btn-primary  py-3 px-4 rounded-pill me-2 mt-2'
                    to='/'
                    target='_blank'
                  >
                    Download for free
                  </Link>
                  <Link
                    className='btn btn-outline-secondary py-3 px-4 rounded-pill mt-2'
                    to='/'
                    target='_blank'
                  >
                    Download for free
                  </Link>
                </ButtonGroup>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='masthead-device-mockup'>
                <Image fluid src='assets/img/rocket.svg' />
              </div>
            </div>
          </div>
        </div>
      </header>

      <Row
        as='aside'
        className='row gx-5 justify-content-center bg-gradient-primary-to-secondary px-5 py-5'
      >
        <Col md={6} lg={7}>
          <h3 className='font-alt'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
            nesciunt libero. Magnam sapiente ipsum itaque optio quidem
            exercitationem necessitatibus accusamus tempore, illo reprehenderit
            expedita amet.
            {/* //!https://www.ooba.co.za/home-loan/bond-repayment-calculator/ */}
          </h3>
        </Col>
        <Col md={6} lg={5} className=' '>
          <h2 className='h2 fs-1 text-white mb-4'>
            Insert the price of the property you wish to purchase and we will
            calculate how much your total monthly repayment amount will be.
          </h2>
        </Col>
      </Row>

      <section id='features'>
        <div className='container px-5'>
          <div className='row gx-5 align-items-center'>
            <div className='col-lg-8 order-lg-1 mb-5 mb-lg-0'>
              <div className='container-fluid px-5'>
                <div className='row gx-5'>
                  <div className='col-md-6 mb-5'>
                    <div className=''>
                      <i className='bi-phone icon-feature text-gradient d-block mb-3'></i>
                      <h3 className='font-alt'>Shop with confidence</h3>
                      <p className='text-muted mb-0'>
                        Knowing your credit score allows you to address any
                        issues before applying for a home loan.
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6 mb-5'>
                    <div className=''>
                      <i className='bi-camera icon-feature text-gradient d-block mb-3'></i>
                      <h3 className='font-alt'>Know how much you can afford</h3>
                      <p className='text-muted mb-0'>
                        We consider your financial information in the same way a
                        bank would, to give you an accurate assessment of what
                        you can afford.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 mb-5 mb-md-0'>
                    <div className=''>
                      <i className='bi-gift icon-feature text-gradient d-block mb-3'></i>
                      <h3 className='font-alt'>
                        Get the competitive advantage
                      </h3>
                      <p className='text-muted mb-0'>
                        Sellers are more likely to accept an offer from someone
                        who has proof that they can afford to buy.
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className=''>
                      <i className='bi-patch-check icon-feature text-gradient d-block mb-3'></i>
                      <h3 className='font-alt'>Sign with confidence</h3>
                      <p className='text-muted mb-0'>
                        Pre-approval protects you from putting in an offer on a
                        property you can't afford. Why risk disappointment?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 order-lg-0'>
              <div className='features-device-mockup'>
                <Image fluid src='assets/img/mobile.svg' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-light'>
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

      <Footer />
    </Container>
  );
};

export default HomePage;

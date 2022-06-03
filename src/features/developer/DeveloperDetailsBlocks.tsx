import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const DeveloperDetailsBlocks = () => {
  return (
    <Container className='px-0' id='developer'>
      <hr />
      <Row className='row align-items-lg-stretch gy-3 mt-1 mb-3 mx-0'>
        <Col lg={6} className=' ps-lg-0 mt-0'>
          <div className='h-100 p-5 text-white bg-dark bg-gradient-primary-to-secondary '>
            <h2 className='text-light'>About this project</h2>
            <p className=''>
              This website was built with React, Redux Toolkit, Bootstrap and
              Framer motion. Please feel free to plug in your own data to test
              it out 😁.
            </p>
            <a
              className='btn btn-outline-light  rounded-pill'
              href='https://github.com/tasmto/inteligets'
              type='button'
            >
              View the Code
            </a>
          </div>
        </Col>
        <Col lg={6} className=' pe-lg-0 mt-lg-0'>
          <div className='h-100 p-5 bg-light border '>
            <h2>About the Author</h2>
            <p>
              Hi there, I'm a fullstack JavaScript developer from Zimbabwe.
              Currently (At the time of development) looking for my next
              opportunity to make cool stuff.
            </p>
            <a
              className='btn btn-outline-secondary rounded-pill'
              href='https://tasmto.netlify.app/'
              type='button'
            >
              Learn more about me
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DeveloperDetailsBlocks;

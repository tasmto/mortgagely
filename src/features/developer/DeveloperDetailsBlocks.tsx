import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const DeveloperDetailsBlocks = () => {
  return (
    <Container className='px-0' id='developer'>
      <hr />
      <Row className='row align-items-lg-stretch gy-3 my-3 mx-0'>
        <Col lg={6} className=' ps-lg-0'>
          <div className='h-100 p-5 text-white bg-dark bg-gradient-primary-to-secondary rounded-3'>
            <h2 className='text-light'>About this project</h2>
            <p className=''>
              This store was built with React.js with Redux and Bootstrap on the
              frontend, Node.js, Express.js for the server and MongoDB with
              Mongoose for the Database.
              <br />
              <br />
              For this version I've enabled the PayPal SDK in Sandbox mode sor
              feel free to test out the entire checkout process!
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
        <Col lg={6} className=' pe-lg-0'>
          <div className='h-100 p-5 bg-light border rounded-3'>
            <h2>About the Author</h2>
            <p>
              Hi there, I'm a fullstack JavaScript developer from Zimbabwe.
              Currently (At the time of development) looking for my next
              opportunity to make cool stuff.
              <br />
              <br />
              Thank you so much for your time. If you'd like to learn more about
              me or see some more of my work click the button below 😊.
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

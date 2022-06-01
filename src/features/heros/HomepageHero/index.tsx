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
import Rocket from '../../animatedImages/rocket';
import { motion } from 'framer-motion';

type Props = {};

const HomePageHero = (props: Props) => {
  return (
    <section className='border bg-light overflow-hidden'>
      <Container
        as={Row}
        className=' gx-5 align-items-center justify-content-between'
      >
        <motion.article
          className='col-lg-6 col-xxl-4 me-0 mb-lg-0 text-center text-lg-start'
          initial={{ y: 30, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <h1 className='display-1 lh-1 mb-3'>Mortgage payment calculator.</h1>
          <p>
            <small className='fw-normal text-muted mb-4'>
              *Please note that this tool is only to be used as a rough guide...
            </small>
          </p>
          <ButtonGroup className='d-flex flex-wrap'>
            <a
              className='btn btn-primary  py-3 px-4 rounded-pill me-2 mt-2'
              href='#calculator'
            >
              Go to calculators
            </a>
            <a
              href='#developer'
              className='btn btn-outline-secondary py-3 px-4 rounded-pill mt-2'
              to='/'
            >
              Developer
            </a>
          </ButtonGroup>
        </motion.article>
        <motion.div
          className='col-lg-6 d-none d-lg-block '
          initial={{ x: 30, opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: 'easeOut',
            duration: 0.5,

            delay: 0.4,
          }}
        >
          <Rocket />
        </motion.div>
      </Container>
    </section>
  );
};

export default HomePageHero;

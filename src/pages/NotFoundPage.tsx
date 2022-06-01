import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <Container
      as='section'
      style={{ minHeight: '80vh', boxSizing: 'border-box' }}
      className='justify-content-center align-items-center d-flex flex-column .not-found--page--wrapper position-relative'
    >
      <h1 className='display-2 w-100 mb-0'>
        Something went wrong. <br />
      </h1>
      <h5 className='display-6 w-100 font-alt f-alt mb-3 mb-lg-5'>
        Seems like that page doesn't exist
      </h5>
      <Link to='' className='fs-2  mt-3 w-100'>
        Go back to Homepage
      </Link>
      <Image
        src='assets/img/404.gif'
        style={{ zIndex: '-1', opacity: 0.8 }}
        className='position-absolute d-none d-md-block bottom-0 end-0'
      />
    </Container>
  );
};

export default NotFoundPage;

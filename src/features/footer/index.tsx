import React from 'react';
import { Row, Container, Col, Nav } from 'react-bootstrap';
import { SITE_TITLE } from '../../constants/GlobalConstants';

type Props = {};

function Footer({}: Props) {
  return (
    <Container className='pb-3'>
      <hr />
      <Row as='footer' className='align-items-center justify-content-between'>
        <Col sm='auto'>
          <small className='mb-2'>
            &copy; {SITE_TITLE} {new Date().getFullYear()}. All Rights Reserved.
          </small>
        </Col>
        <Col sm='auto'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

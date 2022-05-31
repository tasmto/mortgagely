import React from 'react';
import { SITE_TITLE } from '../../constants/GlobalConstants';
import {
  Navbar,
  NavDropdown,
  Offcanvas,
  Nav,
  Container,
} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand='md' id='mainNav' sticky='top' className='mb-3 shadow'>
      <Container fluid='md'>
        <Navbar.Brand href='#'>{SITE_TITLE}</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-md`}
          aria-labelledby={`offcanvasNavbarLabel-md`}
          placement='end'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-md`}>
              {SITE_TITLE}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Nav.Link href='#faq'>Bonds</Nav.Link>
              <Nav.Link href='#faq'>Mortgages</Nav.Link>
              <Nav.Link href='#faq'>FAQ's</Nav.Link>
              <Nav.Link href='#about'>About</Nav.Link>
              <Nav.Link href='#developer'>Developer</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;

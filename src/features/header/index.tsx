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
        <Navbar.Brand href='#'>
          <h1 className='fs-4 text-center w-100 mb-0 pb-0'>{SITE_TITLE}</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-md`}
          aria-labelledby={`offcanvasNavbarLabel-md`}
          placement='end'
        >
          <Offcanvas.Header closeButton className='pb-0'>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-md`}
              className=' text-center w-100 mt-3 pb-0'
            >
              <h1 className='fs-4 text-center w-100 mb-0 pb-0'>{SITE_TITLE}</h1>
              <hr />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-stretch justify-content-md-end text-center flex-grow-1 pe-3'>
              <Nav.Link href='#faq' className='  my-1 mt-lg-0'>
                FAQ's
              </Nav.Link>
              <Nav.Link href='#about' className='  my-1 mt-lg-0'>
                About
              </Nav.Link>
              <Nav.Link href='#developer' className='  my-1 mt-lg-0'>
                Developer
              </Nav.Link>
              <Nav.Link
                href='#calculator'
                className='ms-md-2 btn btn-primary text-white py-2 mb-0 px-3 rounded-pill'
              >
                Calculators
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './features/footer';
import Header from './features/header';
import { routes } from './Routes';
import './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Container as='main' fluid>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Container>
      <Footer />
    </Router>
  </React.StrictMode>
);

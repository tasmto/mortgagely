import React from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './features/footer';
import Header from './features/header';
import { routes } from './Routes';
import './scss/main.scss';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

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
      <CustomCursor
        targets={['a', '.btn', '.navbar-toggler', '.link']}
        customClass='custom-cursor'
        dimensions={45}
        fill='#FFF'
        strokeWidth={1}
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.5}
        targetScale={2}
      />
    </Router>
  </React.StrictMode>
);

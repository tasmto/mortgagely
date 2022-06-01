import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const routes = [
  {
    name: 'Homepage',
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    name: '404',
    path: '*',
    exact: true,
    component: NotFoundPage,
  },
];

export { routes };

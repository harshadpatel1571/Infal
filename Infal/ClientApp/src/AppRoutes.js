import React, {lazy } from 'react';

const Dashboard = lazy(() => import('./components/Dashboard'));
const Account = lazy(() => import('./components/Account'));


const AppRoutes = [
  {
    index: true,
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/account',
    element: <Account />
  }
];

export default AppRoutes;

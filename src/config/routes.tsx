import React from 'react';
import { DashboardScreen } from '@/screens';
import { RouteObject } from 'react-router-dom';

const routes = (): Array<RouteObject> => [
  {
    path: '/',
    element: <DashboardScreen />,
  },
];

export default routes;

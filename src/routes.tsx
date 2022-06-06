// Screens.
import { HomeScreen, InvoiceGeneratorScreen } from '@/screens';

// Interfaces.
import type { RouteObject } from 'react-router-dom';

// Routes object.
const routes = (): Array<RouteObject> => [
  {
    path: '/',
    element: <HomeScreen />,
  },
  {
    path: '/generator',
    element: <InvoiceGeneratorScreen />,
  },
];

export default routes;

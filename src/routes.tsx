// Screens.
import { InvoiceGeneratorScreen } from '@/screens';

// Interfaces.
import type { RouteObject } from 'react-router-dom';

// Routes object.
const routes = (): Array<RouteObject> => [
  {
    path: '/',
    element: <InvoiceGeneratorScreen />,
  },
];

export default routes;

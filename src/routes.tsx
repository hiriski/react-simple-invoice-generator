// Screens.
import { InvoiceEditorScreen } from '@/screens';

// Interfaces.
import type { RouteObject } from 'react-router-dom';

// Routes object.
const routes = (): Array<RouteObject> => [
  {
    path: '/',
    element: <InvoiceEditorScreen />,
  },
];

export default routes;

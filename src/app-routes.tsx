// React
import { FC, Suspense } from 'react';

// Hooks router.
import { useRoutes } from 'react-router-dom';

// Routes object.
import routes from './routes';

const AppRoutes: FC = () => {
  return <Suspense fallback={null}>{useRoutes(routes())}</Suspense>;
};

export default AppRoutes;

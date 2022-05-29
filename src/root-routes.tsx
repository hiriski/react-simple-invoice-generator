import React, { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/config/routes';

const RootRoutes = (): ReactElement => {
  return <>{useRoutes(routes())}</>;
};

export default RootRoutes;

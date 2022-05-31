import { FC } from 'react';

// Mui components.
import { AppBar as MuiAppBar, Container } from '@mui/material';

import { AppConfig } from '@/config';

const AppBar: FC = () => {
  return (
    <MuiAppBar elevation={0}>
      <Container>{AppConfig.appName}</Container>
    </MuiAppBar>
  );
};

export default AppBar;

import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DashboardScreen: FC = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography variant="h4" component="h1">
        React Invoice Generator
      </Typography>
    </Box>
  );
};

export default DashboardScreen;

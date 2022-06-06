import { FC } from 'react';

// Router link.
import { Link as RouterLink } from 'react-router-dom';

// Mui components.
import { Box, Button, Typography } from '@mui/material';

// Mui icons.
import { ArrowForwardOutlined } from '@mui/icons-material';

// Config.
import { AppConfig } from '@/config';

const HomeScreen: FC = () => (
  <Box
    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
  >
    <Box sx={{ mb: 3, textAlign: 'center' }}>
      <Typography sx={{ mb: 1 }} variant="h2" component="h1">
        {AppConfig.appName}
      </Typography>
      <Typography color="text.secondary">{AppConfig.appDescription}</Typography>
    </Box>

    <Button
      component={RouterLink}
      to="/generator"
      variant="contained"
      disableElevation
      size="large"
      endIcon={<ArrowForwardOutlined />}
    >
      Create Your Invoice
    </Button>
  </Box>
);

export default HomeScreen;

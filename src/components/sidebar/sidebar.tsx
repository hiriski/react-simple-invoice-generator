import { FC } from 'react';

// components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/material';

// icons
import ConstructionIcon from '@mui/icons-material/Construction';

// constants
import { SIDEBAR_CONTAINER_WIDTH, SIDEBAR_WIDTH } from '@/constants';
import { Footer } from '../footer';

interface Props {
  sx?: SxProps;
}

const Sidebar: FC<Props> = ({ sx }) => {
  return (
    <Box sx={{ width: { xs: '100%', md: SIDEBAR_CONTAINER_WIDTH }, position: 'fixed' }}>
      <Box sx={{ height: '100vh', display: 'flex', width: SIDEBAR_WIDTH, px: 2, py: 2 }}>
        <Paper
          sx={{
            flex: 1,
            borderRadius: 2,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            ...sx,
          }}
        >
          <ConstructionIcon sx={{ color: 'text.disabled', fontSize: 42, mb: 2 }} />
          <Typography sx={{ color: 'text.disabled', fontSize: 16 }}>Invoice Settings</Typography>
          <Footer />
        </Paper>
      </Box>
    </Box>
  );
};

export default Sidebar;

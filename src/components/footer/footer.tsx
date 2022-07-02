import { FC } from 'react';

// Mui components.
import { Box, Typography } from '@mui/material';

// Mui icons.
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', pb: 8, pt: 4 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle1">Made with</Typography>
        <FavoriteIcon sx={{ color: '#ff3636', fontSize: 18, margin: '0 4px' }} />
        <Typography variant="subtitle1">at South Beach</Typography>
      </Box>
      <Typography variant="subtitle1">Pelabuhanratu, Indonesia</Typography>
    </Box>
  );
};

export default Footer;

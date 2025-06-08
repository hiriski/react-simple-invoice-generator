import { FC, ReactNode } from 'react';

// Mui components.
import { Box, Container } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';

// App bar
import { AppBar } from '@/components//app-bar';

// Background image
import backgroundImage from '@/assets/images/background_header.jpg';
import { Footer } from '@/components/footer';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const theme = useTheme();

  const isMatchMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ bgcolor: 'background.default', height: '100vh', overflow: 'hidden' }}>
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Container maxWidth={false} disableGutters>
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;

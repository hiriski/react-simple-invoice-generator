import { FC, ReactNode } from 'react';

// Mui components.
import { Box, Container } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';

// App bar
import { AppBar } from '@/components//app-bar';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const theme = useTheme();

  const isMatchMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {/* App bar */}
      <AppBar />

      {/* Background layout */}
      <Box
        sx={{
          width: '100%',
          position: 'fixed',
          backgroundColor: 'primary.main',
          height: isMatchMobileView ? 200 : 300,
        }}
      />
      <Box sx={{ position: 'relative', pt: '120px', pb: 10 }}>
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

export default Layout;

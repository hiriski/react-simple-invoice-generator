import { FC, ReactNode, useMemo } from 'react';

// Mui
import { createTheme, Theme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Lodash
import merge from 'lodash/merge';

// Theme mui-config
import {
  paletteBase,
  paletteDark,
  paletteLight,
  typography,
  components,
  shadows,
  shape,
  zIndex,
} from '@/plugins/mui/config';

interface MuiThemeProviderProps {
  children: ReactNode;
}

const MuiThemeProvider: FC<MuiThemeProviderProps> = ({ children }) => {
  const appTheme_paletteMode = 'light';

  // Theme config.
  const theme = useMemo<Theme>(() => {
    const palette =
      appTheme_paletteMode === 'light' ? merge(paletteBase, paletteLight) : merge(paletteBase, paletteDark);
    return createTheme({
      palette,
      typography,
      shadows,
      components,
      shape,
      zIndex,
    });
  }, [appTheme_paletteMode]);

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        {children}
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export default MuiThemeProvider;

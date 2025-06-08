import { FC, ReactNode, useMemo } from 'react';

// @mui
import { createTheme, Theme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// lodash
import merge from 'lodash/merge';

// @mui theme
import {
  breakpoints,
  components,
  paletteBase,
  paletteDark,
  paletteLight,
  shadows,
  shape,
  typography,
  zIndex,
} from '@/plugins/@mui/theme';

interface MuiThemeProviderProps {
  children: ReactNode;
}

const MuiThemeProvider: FC<MuiThemeProviderProps> = ({ children }) => {
  const appTheme_paletteMode = 'light';

  const theme = useMemo<Theme>(() => {
    const palette =
      appTheme_paletteMode === 'light' ? merge(paletteBase, paletteLight) : merge(paletteBase, paletteDark);
    return createTheme({
      breakpoints,
      components,
      palette,
      typography,
      shadows,
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

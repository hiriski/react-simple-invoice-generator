// Mui.
import { createTheme } from '@mui/material/styles';

// Custom theme options.
import palette from './palette';
import typography from './typography';
import shadows from './shadows';
import shape from './shape';

export const THEME_SPACING = 6;

// Theme config.
export const theme = createTheme({
  palette,
  typography,
  shadows,
  shape,
  spacing: THEME_SPACING,
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: shadows[1],
          '&.Mui-focusVisible': {
            boxShadow: shadows[3],
          },
          '&:active': {
            boxShadow: shadows[5],
          },
        },
      },
    },
  },
});

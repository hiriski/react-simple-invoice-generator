// Mui.
import { createTheme } from '@mui/material/styles';

// Custom theme options.
import palette from './palette';
import typography from './typography';
import shadows from './shadows';
import shape from './shape';
import { grey } from '@mui/material/colors';

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
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: 20,
          padding: 0,
          marginBottom: THEME_SPACING * 2,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          paddingTop: `${THEME_SPACING * 3}px !important`,
          padding: '1rem 0 0 0',
          fontSize: '0.9rem',
          lineHeight: 1.5,
          color: palette.text?.secondary,
          marginBottom: THEME_SPACING,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: 0,
          marginTop: THEME_SPACING * 4,
          paddingTop: THEME_SPACING * 4,
          borderTop: `1px solid ${grey[200]}`,
        },
      },
    },
  },
});

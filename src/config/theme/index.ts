// Mui.
import { createTheme } from '@mui/material/styles';

// Custom theme options.
import palette from './palette';
import typography from './typography';
import shadows from './shadows';
import shape from './shape';

// Theme config.
export const theme = createTheme({
  palette,
  typography,
  shadows,
  shape,
});

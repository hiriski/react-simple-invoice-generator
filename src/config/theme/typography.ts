// Interfaces.
import { TypographyOptions } from '@mui/material/styles/createTypography';

// Default font family
export const fontFamily = [
  'Be Vietnam Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
].join(', ');

// Custom theme typography.
const typography: TypographyOptions = {
  fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    fontSize: 34,
  },
  h2: {
    fontWeight: 700,
    fontSize: 30,
  },
  h3: {
    fontSize: 28,
    fontWeight: 700,
  },
  h4: {
    fontSize: 24,
    fontWeight: 700,
  },
  h5: {
    fontSize: 20,
    fontWeight: 700,
  },
  h6: {
    fontSize: 16,
    fontWeight: 700,
  },
  body1: {
    fontSize: '0.875rem',
  },
  body2: {
    fontSize: '0.875rem',
  },
  subtitle1: {
    fontSize: '0.75rem',
  },
  subtitle2: {
    fontSize: '0.72rem',
  },
};

export default typography;

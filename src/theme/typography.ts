import { TypographyOptions } from '@mui/material/styles/createTypography';

export const fontFamily = [
  'Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
].join(',');

const typography: TypographyOptions = {
  fontFamily: [
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  ].join(','),
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    fontSize: 34,
    fontFamily,
  },
  h2: {
    fontWeight: 700,
    fontSize: 30,
    fontFamily,
  },
  h3: {
    fontSize: 28,
    fontWeight: 700,
    fontFamily,
  },
  h4: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily,
  },
  h5: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily,
  },
  h6: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily,
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

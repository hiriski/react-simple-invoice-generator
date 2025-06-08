import { TypographyVariantsOptions } from '@mui/material';

export const fontFamily = [
  `"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
].join(',');

export const typography: TypographyVariantsOptions = {
  fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    fontSize: 42,
    fontFamily,
  },
  h2: {
    fontWeight: 700,
    fontSize: 34,
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
    fontSize: 18,
    fontWeight: 600,
    fontFamily,
  },
  h6: {
    fontSize: 16,
    fontWeight: 600,
    fontFamily,
  },
  body1: {
    fontSize: '0.875rem',
  },
  body2: {
    fontSize: '0.875rem',
  },
  subtitle1: {
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: '0.82rem',
    fontWeight: 500,
  },
};

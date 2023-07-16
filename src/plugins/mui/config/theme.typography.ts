// import { AppStyleLibs } from '@/features/app/libs'
import { TypographyOptions } from '@mui/material/styles/createTypography';

export const fontFamily = [
  `"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
].join(',');

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
    fontSize: 15,
    fontWeight: 700,
  },
  body1: {
    fontSize: '0.875rem',
    lineHeight: 1.45,
  },
  body2: {
    fontSize: '0.875rem',
  },
  subtitle1: {
    fontSize: '0.8rem',
  },
  subtitle2: {
    fontSize: '0.7rem',
  },
};

export { typography };

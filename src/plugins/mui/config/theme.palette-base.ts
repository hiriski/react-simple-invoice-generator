// import { PaletteOptions } from '@mui/material';

import { SimplePaletteColorOptions } from '@mui/material';

interface PaletteOptions {
  primary?: SimplePaletteColorOptions;
  secondary?: SimplePaletteColorOptions;
}

const paletteBase: PaletteOptions = {
  primary: {
    light: '#D6F2FF',
    main: '#228dff',
    dark: '#186DDB',
    contrastText: '#fbfbfb',
  },
  secondary: {
    light: '#FEF3CC',
    main: '#fc9119',
    dark: '#DA7110',
    contrastText: '#fbfbfb',
  },
};

export { paletteBase };

import { alpha, PaletteOptions } from '@mui/material';
import { grey, common } from '@mui/material/colors';

export const paletteLight: PaletteOptions = {
  mode: 'light',
  background: {
    default: '#ecf1fa',
    paper: common.white,
  },
  text: {
    primary: grey[800],
    secondary: grey[600],
    disabled: grey[500],
  },
  divider: alpha('#000', 0.07),
};

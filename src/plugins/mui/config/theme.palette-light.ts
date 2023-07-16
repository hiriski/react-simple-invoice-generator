import { PaletteOptions } from '@mui/material';
import { grey, common } from '@mui/material/colors';

const paletteLight: PaletteOptions = {
  mode: 'light',
  background: {
    default: '#f7f7f7',
    paper: common.white,
  },
  text: {
    primary: grey[800],
    secondary: grey[600],
    disabled: grey[500],
  },
};

export { paletteLight };

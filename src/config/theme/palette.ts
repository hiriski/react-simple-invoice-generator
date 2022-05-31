// Colors.
import { blueGrey, common } from '@mui/material/colors';

// Interfaces.
import { Palette } from '@mui/material/styles';

// Custom theme palette.
const palette: Partial<Palette> = {
  background: {
    default: '#f7f7f7',
    paper: common.white,
  },
  primary: {
    light: '#DAEEFF',
    main: '#4790FF',
    dark: '#2352B7',
    contrastText: '#fbfbfb',
  },
  secondary: {
    light: '#FFE699',
    main: '#FFA600',
    dark: '#DB8600',
    contrastText: '#fbfbfb',
  },
  text: {
    primary: blueGrey[900],
    secondary: blueGrey[600],
    disabled: blueGrey[400],
  },
};

export default palette;

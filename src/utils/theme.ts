// Config palettes Mui theme.
// import palette from '@/config/theme/palette';

// Interfaces.
import { paletteLight } from '@/plugins/mui/config';
import { TypeText, TypographyVariant } from '@mui/material';

const THEME_SPACING = 4;

/**
 * Create spacing
 *
 * @param {number} unit
 * @return {number}
 */
export const createSpacing = (unit: number): string => unit * THEME_SPACING + 'px';

/**
 * Get font size for styles react pdf
 *
 * @param {TypographyVariant} variant
 * @return {number}
 */
export const getTypographyFontSize = (variant?: TypographyVariant): number => {
  switch (variant) {
    case 'h1':
      return 26;
    case 'h2':
      return 22;
    case 'h3':
      return 20;
    case 'h4':
      return 16;
    case 'h5':
      return 14;
    case 'h6':
      return 10.75;
    case 'body1':
      return 10;
    case 'body2':
      return 9.5;
    case 'subtitle1':
      return 9.5;
    case 'subtitle2':
      return 8.4;
    default:
      return 10;
  }
};

/**
 * Get basic typography color.
 *
 * @param {keyof TypeText} color
 * @return {string}
 */
export const getTypographyColor = (color?: keyof TypeText): string => {
  switch (color) {
    case 'primary':
      return String(paletteLight.text?.primary);
    case 'secondary':
      return String(paletteLight.text?.secondary);
    case 'disabled':
      return String(paletteLight.text?.disabled);
    default:
      return String(paletteLight.text?.primary);
  }
};

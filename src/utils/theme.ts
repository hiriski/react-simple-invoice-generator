import { THEME_SPACING } from '@/config';

// Config palettes Mui theme.
import palette from '@/config/theme/palette';

// Interfaces.
import { TypeText, TypographyVariant } from '@mui/material';

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
      return 27;
    case 'h2':
      return 24;
    case 'h3':
      return 22;
    case 'h4':
      return 17;
    case 'h5':
      return 15;
    case 'h6':
      return 11.5;
    case 'body1':
      return 10.5;
    case 'body2':
      return 12;
    case 'subtitle1':
      return 10;
    case 'subtitle2':
      return 9;
    default:
      return 10.5;
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
      return String(palette.text?.primary);
    case 'secondary':
      return String(palette.text?.secondary);
    case 'disabled':
      return String(palette.text?.disabled);
    default:
      return String(palette.text?.primary);
  }
};

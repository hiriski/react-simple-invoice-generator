import { FC } from 'react';

// React Pdf.
import { Text as PDFText } from '@react-pdf/renderer';

// Mui components.
import InputBase, { InputBaseProps } from '@mui/material/InputBase';

// Mui styles.
import { styled } from '@mui/material/styles';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

// Utilities.
import { getTypographyColor, getTypographyFontSize } from '@/utils';

// Interfaces.
import { PdfStyle } from '@/interfaces/pdf-styles';
import { SxProps, TypeText, TypographyVariant } from '@mui/material';
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

// Styled components.
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(0.4, 0.6),

  '& input': {
    boxSizing: 'border-box !important',
  },

  '&.Mui-focused': {
    backgroundColor: theme.palette.primary.light + ' !important',
  },

  '&:hover': {
    backgroundColor: 'rgb(234 255 234)',
    '&:before': {
      // backgroundColor: theme.palette.primary.light,
    },
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    transform: 'scaleX(1.05) scaleY(1.1)',
    // backgroundColor: 'rgba(0, 0, 0, 0.015)',
    // border: '1px solid rgba(0, 0, 0, 0.05)',
    borderRadius: 2,
  },
}));

interface Props extends Omit<InputBaseProps, 'color' | 'style'> {
  style?: SxProps | PdfStyle;
  variant?: TypographyVariant;
  color?: keyof TypeText;
}

const EditableText: FC<Props> = (props) => {
  const { editable, debug } = useGenerator();

  const { variant, color, value, style, ...rest } = props;

  return editable ? (
    <StyledInputBase value={String(value)} sx={{ width: '90%', ...style }} {...rest} />
  ) : (
    <PDFText
      debug={false}
      style={[
        { lineHeight: 1.5, fontSize: getTypographyFontSize(variant), color: getTypographyColor(color) },
        { ...(style as PdfStyle) },
      ]}
    >
      {String(value)}
    </PDFText>
  );
};

EditableText.defaultProps = {
  variant: 'body1',
  color: 'primary',
};

export default EditableText;

import { FC } from 'react';

// React Pdf.
import { Text as PDFText } from '@react-pdf/renderer';

// Mui components.
import MuiTypography from '@mui/material/Typography';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

// Utilities.
import { getTypographyColor, getTypographyFontSize } from '@/utils';

// Interfaces.
import { PdfStyle } from '@/interfaces/pdf-styles';
import { SxProps, TypeText, TypographyVariant } from '@mui/material';
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

interface Props extends Pick<MuiTypographyProps, 'children'> {
  style?: SxProps | PdfStyle;
  variant?: TypographyVariant;
  color?: keyof TypeText;
  fixed?: boolean;
}

const Typography: FC<Props> = (props) => {
  const { editable, debug } = useGenerator();

  const { variant, color, style, children, fixed } = props;

  return editable ? (
    <MuiTypography sx={{ ...(style as SxProps) }} variant={variant}>
      {children}
    </MuiTypography>
  ) : (
    <PDFText
      fixed={fixed}
      debug={false}
      style={[
        { lineHeight: 1.5, fontSize: getTypographyFontSize(variant), color: getTypographyColor(color) },
        { ...(style as PdfStyle) },
      ]}
    >
      {children}
    </PDFText>
  );
};

Typography.defaultProps = {
  variant: 'body1',
  color: 'primary',
};

export default Typography;

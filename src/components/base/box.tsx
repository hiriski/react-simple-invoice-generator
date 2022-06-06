import { FC, ReactNode } from 'react';

// React Pdf.
import { View as PDFView } from '@react-pdf/renderer';

// Mui components.
import MuiBox from '@mui/material/Box';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

// Interfaces.
import { SxProps } from '@mui/material';
import { PdfStyle } from '@/interfaces/pdf-styles';

interface Props {
  children?: ReactNode;
  style?: SxProps | PdfStyle;
}

const Box: FC<Props> = ({ style, children }) => {
  const { editable, debug } = useGenerator();

  return editable ? (
    <MuiBox sx={style as SxProps}>{children}</MuiBox>
  ) : (
    <PDFView debug={false} style={style as PdfStyle}>
      {children}
    </PDFView>
  );
};

export default Box;

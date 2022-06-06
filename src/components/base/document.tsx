import { FC, ReactNode } from 'react';

// React Pdf.
import { Document as PDFDocument } from '@react-pdf/renderer';

// Mui components.
import { Box } from '@mui/material';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

interface Props {
  children: ReactNode;
}

const Document: FC<Props> = ({ children }) => {
  const { editable } = useGenerator();
  return editable ? (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', height: '100%' }}>
      {children}
    </Box>
  ) : (
    <PDFDocument>{children}</PDFDocument>
  );
};
export default Document;

import { FC, ReactNode } from 'react';

// React Pdf.
import { Page as PDFPage } from '@react-pdf/renderer';

// Base components.
import { Box } from '@/components/base';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

interface Props {
  children: ReactNode;
}

const Page: FC<Props> = ({ children }) => {
  const { editable } = useGenerator();

  return editable ? (
    <Box style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>{children}</Box>
  ) : (
    <PDFPage
      size={'A4'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Plus Jakarta Sans',
      }}
    >
      {children}
    </PDFPage>
  );
};
export default Page;

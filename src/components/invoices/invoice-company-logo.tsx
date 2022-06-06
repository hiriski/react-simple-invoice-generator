import { FC } from 'react';

// React Pdf.
import { Image } from '@react-pdf/renderer';

// Base components.
import { Box } from '@/components/base';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

const sampleLogo = 'https://www.carlrippon.com/static/64d2dff032f91508ec5326d8e4cdaaab/11d19/React-and-typescript.png';

const InvoiceCompanyLogo: FC = () => {
  const { editable } = useGenerator();
  return editable ? (
    <Box style={{ maxWidth: 240, height: 'auto', mb: 2 }}>
      <img src={sampleLogo} alt="Sample logo" style={{ width: '100%', height: 'auto' }} />
    </Box>
  ) : (
    <Box style={{ maxWidth: 180, height: 'auto', marginBottom: '12px' }}>
      <Image source={sampleLogo} />
    </Box>
  );
};
export default InvoiceCompanyLogo;

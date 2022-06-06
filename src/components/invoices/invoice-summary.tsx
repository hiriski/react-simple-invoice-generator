import { FC } from 'react';

// Base components.
import { Box, Typography } from '@/components/base';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

// Utilities.
import { formatRupiah } from '@/utils/currency';

// Styles.
const rowStyles = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: '#ffffff',
};
const colStyles = {
  position: 'relative',
  display: 'flex',
};

interface Props {
  subTotal: number;
  taxRate?: number;
  saleTax?: number;
}

const InvoiceSummary: FC<Props> = ({ subTotal, taxRate, saleTax }) => {
  const { editable } = useGenerator();

  return (
    <Box>
      <Box
        style={{
          ...rowStyles,
          borderTopRightRadius: 3,
          borderTopLeftRadius: 3,
          padding: editable ? '10px 16px' : '8px 16px',
          borderBottom: '1px solid #F6F9FC',
        }}
      >
        <Box style={{ width: '62%', ...colStyles }}>
          <Typography
            style={{
              fontWeight: 600,
            }}
          >
            {'Sub Total'}
          </Typography>
        </Box>
        <Box style={{ width: '38%', ...colStyles }}>
          <Typography style={{ fontWeight: 600 }}>Rp {formatRupiah(subTotal)}</Typography>
        </Box>
      </Box>

      {/* Tax */}
      <Box
        style={{
          ...rowStyles,
          padding: editable ? '10px 16px' : '8px 16px',
        }}
      >
        <Box style={{ width: '62%', ...colStyles }}>
          <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography
              style={{
                fontWeight: 600,
                display: 'inline-block',
              }}
            >
              {'Tax '}
            </Typography>
            <Typography
              color="secondary"
              style={{
                display: 'inline-block',
              }}
            >
              {`(${taxRate}%)`}
            </Typography>
          </Box>
        </Box>
        <Box style={{ width: '38%', ...colStyles }}>
          <Typography style={{ fontWeight: 600 }}>Rp {formatRupiah(Number(saleTax))}</Typography>
        </Box>
      </Box>

      {/* Total */}
      <Box
        style={{
          ...rowStyles,
          padding: editable ? '10px 16px' : '8px 16px',
          backgroundColor: '#EEF6FE',
          borderBottomRightRadius: 3,
          borderBottomLeftRadius: 3,
        }}
      >
        <Box style={{ width: '62%', ...colStyles }}>
          <Typography
            style={{
              fontWeight: 600,
            }}
          >
            {'Total'}
          </Typography>
        </Box>
        <Box style={{ width: '38%', ...colStyles }}>
          <Typography style={{ fontWeight: 600 }}>
            Rp{' '}
            {typeof subTotal !== 'undefined' && typeof taxRate !== 'undefined' ? formatRupiah(subTotal + taxRate) : 0}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InvoiceSummary;

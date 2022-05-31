import { FC } from 'react';

// Mui components.
import { Box, Grid, Typography } from '@mui/material';

// Layout
import { Layout } from '@/components/layout';
import { InvoicePaper } from '@/components/invoice-paper';
import { InvoiceSettings } from '@/components/invoice-settings';

const InvoiceGeneratorScreen: FC = () => (
  <Layout>
    <Grid container spacing={3} justifyContent="space-between">
      <Grid item sx={{ flex: 1 }}>
        <InvoicePaper
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Invoice Paper
        </InvoicePaper>
      </Grid>
      <Grid item sx={{ flex: 1 }}>
        <InvoiceSettings />
      </Grid>
    </Grid>
  </Layout>
);

export default InvoiceGeneratorScreen;

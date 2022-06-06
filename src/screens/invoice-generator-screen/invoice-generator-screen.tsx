import { FC, ReactNode, useState } from 'react';

// Mui components.
import { Box, Grid } from '@mui/material';

// Layout
import { Layout } from '@/components/layout';

// Components.
import { Invoice } from '@/components/invoices';
import { InvoicePaper } from '@/components/invoice-paper';
import { InvoiceSettings } from '@/components/invoice-settings';
import { InvoiceDownloadButton } from '@/components/invoice-download-button';

// Context.
import { generatorContext, IGeneratorContext } from '@/context/generator-context';

// Interfaces.
import { IInvoice } from '@/interfaces/invoice';

// Faker
import { faker } from '@faker-js/faker';

// Generator provider.
const EditableProvider: FC<IGeneratorContext & { children: ReactNode }> = ({ children, editable, debug }) => (
  <generatorContext.Provider value={{ editable, debug }}>{children}</generatorContext.Provider>
);

const InvoiceGeneratorScreen: FC = () => {
  const [invoice] = useState<IInvoice>({
    fileName: `test-invoice-filename-${faker.random.numeric(4)}`,
    invoiceNumber: faker.random.numeric(4),
    date: faker.date.soon().toLocaleDateString(),
    due: faker.date.soon(7).toLocaleDateString(),
    sender: {
      companyName: 'Your Company',
      firstName: 'Riski',
      lastName: '',
      country: 'Indonesia',
      addressLine1: 'Jl. Parahyangan',
      addressLine2: 'Kota Baru Parahyangan',
      state: 'Jawa Barat',
      city: 'Bandung Barat',
      phone: '(021) xxxxxxxxx',
      email: 'hi@riski.me',
    },
    recipient: {
      companyName: faker.company.companyName() + ' ' + faker.company.companySuffix(),
      firstName: faker.name.findName(),
      addressLine1: faker.address.streetAddress(),
      addressLine2: faker.address.streetName(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      country: faker.address.country(),
      postalCode: faker.address.zipCode('####'),
      phone: faker.phone.phoneNumber(),
      email: undefined,
    },
    items: [
      {
        description: 'Schematic Design',
        quantity: 1,
        rate: 500000,
        amount: 500000,
      },
      {
        description: 'Logo Design',
        quantity: 1,
        rate: 300000,
        amount: 300000,
      },
      {
        description: 'Website Company Profile (NextJs SPA)',
        quantity: 1,
        rate: 3000000,
        amount: 3000000,
      },
      {
        description: 'Database Administration',
        quantity: 2,
        rate: 500000,
        amount: 1000000,
      },
      {
        description: 'Back-End & Front-End Development',
        quantity: 1,
        rate: 2500000,
        amount: 2500000,
      },
      {
        description: 'CMS Development & Customization',
        quantity: 1,
        rate: 2000000,
        amount: 2000000,
      },
    ],
    taxRate: 10,
    terms: faker.random.words(16),
    notes: '',
    footerMessages: 'Thank you for your business!',
  });

  return (
    <Layout>
      <Grid container spacing={3}>
        <InvoicePaper>
          <EditableProvider editable={true} debug={false}>
            <Invoice invoice={invoice} />
          </EditableProvider>
        </InvoicePaper>
        <Box sx={{ flex: 1, ml: 4 }}>
          <InvoiceDownloadButton invoice={invoice} />
          <InvoiceSettings />
        </Box>
      </Grid>
    </Layout>
  );
};

export default InvoiceGeneratorScreen;

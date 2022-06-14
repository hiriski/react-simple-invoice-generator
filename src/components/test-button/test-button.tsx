import { invoice_setInvoice } from '@/store/invoice/invoice-actions';
import { Button } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

// Faker.
import { faker } from '@faker-js/faker';

const TestButton: FC = () => {
  const dispatch = useDispatch();

  const testUpdateState = (): void => {
    dispatch(
      invoice_setInvoice({
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
            quantity: '1',
            rate: '500000',
            amount: '500000',
          },
          {
            description: 'Logo Design',
            quantity: '1',
            rate: '300000',
            amount: '300000',
          },
          {
            description: 'Website Company Profile (NextJs SPA)',
            quantity: '1',
            rate: '3000000',
            amount: '3000000',
          },
          {
            description: 'Database Administration',
            quantity: '2',
            rate: '500000',
            amount: '1000000',
          },
          {
            description: 'Back-End & Front-End Development',
            quantity: '1',
            rate: '2500000',
            amount: '2500000',
          },
          {
            description: 'CMS Development & Customization',
            quantity: '1',
            rate: '2000000',
            amount: '2000000',
          },
        ],
        taxRate: 10,
        terms: faker.random.words(16),
        notes: '',
        footerMessages: 'Thank you for your business!',
      }),
    );
  };

  return (
    <>
      <Button onClick={testUpdateState} variant="contained" color="primary" disableElevation>
        Test Update State
      </Button>
    </>
  );
};

export default TestButton;

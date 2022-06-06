import { FC } from 'react';

// Base components.
import { SectionTitle, Typography, Box } from '@/components/base';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

// Utilities.
import { createSpacing } from '@/utils';

// Interfaces.
import { IInvoiceRecipient } from '@/interfaces/invoice';

interface Props {
  recipient: IInvoiceRecipient;
}

const InvoiceRecipient: FC<Props> = ({ recipient }) => {
  const { editable } = useGenerator();
  return (
    <Box style={{ marginBottom: editable ? 3 : createSpacing(3) }}>
      <SectionTitle>TO :</SectionTitle>
      {recipient.companyName ? (
        <Box>
          <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: editable ? 1 : createSpacing(1) }}>
            {recipient.companyName}.
          </Typography>
        </Box>
      ) : (
        <Typography>{recipient.firstName}</Typography>
      )}
      <Typography>
        {recipient.addressLine1}, {recipient.addressLine2}
      </Typography>
      <Typography>
        {recipient.city}, {recipient.state}
      </Typography>
      <Typography style={{ marginBottom: '6px' }}>
        {recipient.country}, {recipient.postalCode}
      </Typography>
      {recipient.email && <Typography>{recipient.email}</Typography>}
      {recipient.phone && <Typography>{recipient.phone}</Typography>}
    </Box>
  );
};

export default InvoiceRecipient;

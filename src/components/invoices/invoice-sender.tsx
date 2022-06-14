import { FC } from 'react';

// Base components.
import { SectionTitle, Typography, EditableText } from '@/components/base';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

// Utilities.
import { createSpacing } from '@/utils/theme';

// Interfaces.
import { IInvoiceSender } from '@/interfaces/invoice';

interface Props {
  from: IInvoiceSender;
}

const InvoiceSender: FC<Props> = ({ from }) => {
  const { editable } = useGenerator();
  return (
    <>
      <SectionTitle>From :</SectionTitle>
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: editable ? 1 : createSpacing(1) }}>
        {from.companyName}
      </Typography>
      <Typography>{from.firstName}</Typography>
      <Typography>
        {from.addressLine1}, {from.addressLine2}
      </Typography>
      <Typography style={{ marginBottom: '6px' }}>
        {from.city}, {from.country} {from.postalCode}
      </Typography>
      {/* <Typography>{from.country}</Typography> */}
      {from.phone && <Typography>{from.phone}</Typography>}
      {from.email && <Typography>{from.email}</Typography>}
    </>
  );
};

export default InvoiceSender;

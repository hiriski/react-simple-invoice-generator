import { FC } from 'react';

// Mui icons.
import ContactPageIcon from '@mui/icons-material/ContactPage';

// Base components.
import { SectionTitle, Typography, Box, EditableAreaMarker, EditableAreaWrapper } from '@/components/base';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

// Utilities.
import { createSpacing } from '@/utils';

// Interfaces.
import { IInvoiceRecipient } from '@/interfaces/invoice';
import InvoiceEditableContentNoData from './invoice-editable/invoice-editable-content-no-data';

interface Props {
  recipient: IInvoiceRecipient;
  handleOpenDialog?: () => void;
}

const InvoiceRecipient: FC<Props> = ({ recipient, handleOpenDialog }) => {
  const { editable } = useGenerator();

  const checkProperties = (obj: Record<string, string>): any => {
    for (const key in obj) {
      if (obj[key] !== null && obj[key] != '') return true;
      else return false;
    }
  };

  const hasRecipient = (): boolean => {
    return checkProperties(recipient as unknown as Record<string, string>);
  };

  return (
    <EditableAreaWrapper>
      <Box style={{ position: 'relative', zIndex: 1 }} onClick={handleOpenDialog as () => void}>
        <SectionTitle>BILLED TO :</SectionTitle>
        {hasRecipient() ? (
          <>
            {recipient.companyName && (
              <Box>
                <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: editable ? 1 : createSpacing(1) }}>
                  {recipient.companyName}
                </Typography>
              </Box>
            )}
            <Typography>
              <>
                {recipient.addressLine1 ? recipient.addressLine1 + ', ' : null}
                {recipient.addressLine2 || null}
              </>
            </Typography>
            <Typography>
              <>
                {recipient.city ? recipient.city + ', ' : null}
                {recipient.state || null}
              </>
            </Typography>
            <Typography></Typography>
            <Typography>{recipient.country || null}</Typography>
            <Typography>{recipient.postalCode || null}</Typography>
            <Typography>{recipient.email || null}</Typography>
            <Typography>{recipient.phone || null}</Typography>
          </>
        ) : editable ? (
          <InvoiceEditableContentNoData
            title="Recipient"
            subtitle="Add invoice recipient details"
            icon={<ContactPageIcon />}
          />
        ) : null}
      </Box>
      {editable && <EditableAreaMarker />}
    </EditableAreaWrapper>
  );
};

export default InvoiceRecipient;

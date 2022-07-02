import { FC } from 'react';

// Base components.
import { Box, Typography, EditableAreaWrapper, EditableAreaMarker } from '@/components/base';

// Mui icons.
import ContactPageIcon from '@mui/icons-material/ContactPage';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

// Utilities.
import { createSpacing } from '@/utils/theme';

// Interfaces.
import { IInvoiceSender } from '@/interfaces/invoice';
// import { useInvoice } from '@/hooks';
import InvoiceEditableContentNoData from './invoice-editable/invoice-editable-content-no-data';

interface Props {
  from: IInvoiceSender;
  handleOpenDialog?: () => void;
}

const InvoiceSender: FC<Props> = ({ from, handleOpenDialog }) => {
  const { editable } = useGenerator();

  const checkProperties = (obj: Record<string, string>): any => {
    for (const key in obj) {
      if (obj[key] !== null && obj[key] != '') return true;
      else return false;
    }
  };

  const hasSender = (): boolean => {
    return checkProperties(from as unknown as Record<string, string>);
  };

  return (
    <EditableAreaWrapper>
      <Box style={{ position: 'relative', zIndex: 1 }} onClick={handleOpenDialog as () => void}>
        {hasSender() ? (
          <>
            {from.companyName && (
              <Box>
                <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: editable ? 1 : createSpacing(1) }}>
                  {from.companyName}
                </Typography>
              </Box>
            )}
            <Typography>
              <>
                {from.addressLine1 ? from.addressLine1 + ', ' : null}
                {from.addressLine2 || null}
              </>
            </Typography>
            <Typography>
              <>
                {from.city ? from.city + ', ' : null}
                {from.state || null}
              </>
            </Typography>
            <Typography></Typography>
            <Typography>{from.country || null}</Typography>
            <Typography>{from.postalCode || null}</Typography>
            <Typography>{from.email || null}</Typography>
            <Typography>{from.phone || null}</Typography>
          </>
        ) : editable ? (
          <InvoiceEditableContentNoData
            title="Company name"
            subtitle="Add your company details"
            icon={<ContactPageIcon />}
          />
        ) : null}
      </Box>
      {editable && <EditableAreaMarker />}
    </EditableAreaWrapper>
  );
};

export default InvoiceSender;

import { ChangeEvent, FC } from 'react';

// Base components.
import { Box, EditableText, Typography } from '@/components/base';

// Utilities.
import { createSpacing } from '@/utils/theme';

// Interfaces.
import { useGenerator } from '@/hooks/useGenerator';
import { useInvoice } from '@/hooks';

interface Props {
  terms: string;
}

const InvoiceTermAndConditions: FC<Props> = ({ terms }) => {
  const { editable } = useGenerator();
  const { invoice, setInvoice } = useInvoice();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setInvoice({ ...invoice, terms: e.target.value });
  };

  return (
    <Box style={{ width: '100%' }}>
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: editable ? 1 : createSpacing(1) }}>
        {'Terms & Conditions'}
      </Typography>
      {editable ? (
        <EditableText
          sx={{ width: '100%' }}
          multiline
          minRows={2}
          maxRows={5}
          name="quantity"
          value={terms}
          onChange={handleChange}
        />
      ) : (
        <Typography variant="subtitle1">{terms}</Typography>
      )}
    </Box>
  );
};

export default InvoiceTermAndConditions;

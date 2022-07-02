import { FC, ReactNode } from 'react';
import { Box } from '@/components/base';
import { useGenerator } from '@/hooks';
import { createSpacing } from '@/utils';
import { useTheme } from '@mui/material';

interface Props {
  children: ReactNode;
}

const EditableAreaWrapper: FC<Props> = ({ children }) => {
  const { editable } = useGenerator();
  const { palette } = useTheme();
  return (
    <Box
      style={{
        position: 'relative',
        marginBottom: editable ? 3 : createSpacing(3),
        cursor: 'pointer',
        '&:hover': {
          '& .invoice-editable-content-no-data': {
            opacity: 1,
          },
          '& .editable-marker': {
            opacity: 1,
            color: 'primary.main',
            backgroundColor: 'primary.light',
            border: `2px dashed ${palette.primary.main}`,
            boxShadow: '4px 4px 0px rgb(0 0 0 / 4%)',
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default EditableAreaWrapper;

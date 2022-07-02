import { FC, ReactNode, useRef } from 'react';

// Mui components.
import MuiBox from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Mui icons.
import UploadFileIcon from '@mui/icons-material/UploadFile';

// React Pdf.
import { Image } from '@react-pdf/renderer';

// Base components.
import { Box, EditableAreaMarker, EditableAreaWrapper, StyledButton } from '@/components/base';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';
import { DeleteOutline } from '@mui/icons-material';

interface Props {
  logo?: string;
  onUploadImage: (image: string) => void;
}

interface PlaceholderProps {
  hasLogo: boolean;
  children?: ReactNode;
}
const Placeholder: FC<PlaceholderProps> = ({ hasLogo, children }) => {
  return (
    <MuiBox
      sx={{
        minHeight: 110,
        opacity: hasLogo ? 1 : 0.5,
        color: 'primary.main',
        backgroundColor: hasLogo ? 'transparent' : 'primary.light',
        border: (theme) => (hasLogo ? '2px dashed transparent' : `2px dashed ${theme.palette.primary.main}`),
        boxShadow: hasLogo ? 'none' : '4px 4px 0px rgb(0 0 0 / 4%)',
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        transition: (theme) => theme.transitions.create(['all']),
        '& .choose-image': {
          display: 'none',
        },
        '&:hover': {
          opacity: 1,
          backgroundColor: 'primary.light',
          border: (theme) => `2px dashed ${theme.palette.primary.main}`,
          boxShadow: '4px 4px 0px rgb(0 0 0 / 4%)',
          '& .choose-image': {
            display: 'inline-flex',
          },
          '& img': {
            display: 'none',
          },
        },
      }}
    >
      {children}
    </MuiBox>
  );
};

const InvoiceCompanyLogo: FC<Props> = ({ logo, onUploadImage }) => {
  const { editable } = useGenerator();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (): void => {
    inputRef?.current?.click();
  };

  const handleChange = (): void => {
    if (inputRef?.current?.files) {
      const files = inputRef.current.files;

      if (files.length > 0) {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
          if (typeof reader.result === 'string') {
            onUploadImage(reader.result);
          }
        });

        reader.readAsDataURL(files[0]);
      }
    }
  };

  const onRemoveImage = (): void => {
    onUploadImage('');
  };

  return editable ? (
    <Box>
      <MuiBox
        sx={{ maxWidth: 160, height: 'auto', mb: 2, cursor: 'pointer', position: 'relative', zIndex: 1 }}
        onClick={handleUpload}
      >
        {logo ? (
          <Placeholder hasLogo={true}>
            <>
              <MuiBox
                className="choose-image"
                sx={{ display: 'inline-flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}
              >
                <UploadFileIcon sx={{ fontSize: 32, mb: 1.5 }} />
                <Typography>Upload Image</Typography>
              </MuiBox>
              <MuiBox component="img" src={logo} sx={{ width: '100%' }} alt="Invoice logo" />
            </>
          </Placeholder>
        ) : (
          <Placeholder hasLogo={false}>
            <UploadFileIcon sx={{ fontSize: 32, mb: 1.5 }} />
            <Typography>Upload Image</Typography>
          </Placeholder>
        )}

        {/* Input */}
        <MuiBox
          component="input"
          ref={inputRef}
          tabIndex={-1}
          type="file"
          accept="image/*"
          onChange={handleChange}
          sx={{ display: 'none' }}
        />
      </MuiBox>
      {logo && (
        <MuiBox sx={{ mb: 2 }}>
          <StyledButton onClick={onRemoveImage} size="small" color="dark" startIcon={<DeleteOutline />}>
            Remove Logo
          </StyledButton>
        </MuiBox>
      )}
    </Box>
  ) : (
    <Box style={{ maxWidth: 110, height: 'auto', marginBottom: '12px' }}>
      {logo ? <Image source={String(logo)} /> : <Box style={{ height: '10px' }} />}
    </Box>
  );
};
export default InvoiceCompanyLogo;

import { FC, useEffect, useState } from 'react';

// React Pdf.
import { PDFDownloadLink } from '@react-pdf/renderer';

// Mui components.
import { Box, Button, Typography, Fab } from '@mui/material';

// Context.
import { generatorContext } from '@/context/generator-context';

// Hooks.
// import { useGenerator } from '@/hooks/useGenerator';

// Faker
import { faker } from '@faker-js/faker';

import { useAppSelector } from '@/store';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const FloatingPreviewButton: FC = () => {
  return (
    <Fab color="primary" aria-label="preview pdf">
      <VisibilityOutlinedIcon />
      {/* <Typography sx={{ ml: 1 }}>Preview</Typography> */}
    </Fab>
  );
};

export default FloatingPreviewButton;

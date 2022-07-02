import { FC } from 'react';
import Box from '@mui/material/Box';

const EditableAreaMarker: FC = () => (
  <Box
    className="editable-marker"
    sx={{
      border: '2px dashed transparent',
      backgroundColor: 'transparent',
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      borderRadius: 1,
      transform: 'scaleX(1.075) scaleY(1.15)',
      transition: (theme) => theme.transitions.create(['transform', 'background-color', 'border']),
    }}
  />
);

export default EditableAreaMarker;

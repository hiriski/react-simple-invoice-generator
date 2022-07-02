import { FC } from 'react';
import TextField from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

interface Props {
  label?: string;
  name: 'date' | 'due';
  value: string;
  onChange: (property: 'date' | 'due', value: string) => void;
}

const EditableDatePicker: FC<Props> = ({ label, name, value, onChange }) => {
  const handleChange = (newValue: Date | null): void => {
    onChange(name, String(newValue));
  };

  return (
    <MobileDatePicker
      // label={label} // I don't need to display label
      closeOnSelect
      inputFormat="MM/dd/yyyy"
      value={value}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          size="small"
          sx={{
            '& .MuiInputBase-input.MuiInputBase-inputSizeSmall': {
              padding: '2.4px 8px!important',
            },
            '& .MuiInputBase-sizeSmall.MuiInputBase-multiline': {
              padding: '2.4px 8px!important',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid transparent !important',
            },
            '&:hover': {
              backgroundColor: (theme) => theme.palette.primary.light,
              '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #bed1e4 !important',
              },
            },
            '&.Mui-focused': {
              backgroundColor: (theme) => theme.palette.primary.light,
              '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #bed1e4 !important',
              },
            },
          }}
          {...params}
        />
      )}
    />
  );
};

export default EditableDatePicker;

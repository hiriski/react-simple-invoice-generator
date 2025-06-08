import { FC } from 'react';
import TextField from '@mui/material/TextField';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

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

  return null;
};

export default EditableDatePicker;

import { FC, useMemo, useRef, useState } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

type CustomTextFieldProps = TextFieldProps;

const CustomTextField: FC<CustomTextFieldProps> = (props) => {
  const { onChange, value } = props;
  return <InputBase onChange={onChange} value={value} />;
};

const EditableDatePicker: FC = () => {
  const [value, setValue] = useState<Date | null>(new Date(new Date()));
  const inputRef = useRef<HTMLInputElement>(null);

  const openPicker = useMemo(() => {
    if (inputRef.current) {
      return inputRef.current;
    } else {
      return inputRef.current;
    }
  }, [inputRef.current]);

  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (newValue: Date | null): void => {
    setValue(newValue);
  };

  console.log('openPicker', openPicker);

  return (
    <DesktopDatePicker
      label="Date desktop"
      inputFormat="MM/dd/yyyy"
      value={value}
      onChange={handleChange}
      renderInput={(params) => <CustomTextField ref={inputRef} {...params} />}
    />
  );
};

export default EditableDatePicker;

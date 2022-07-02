import { FC, ReactNode } from 'react';

// date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// Provider.
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers';

interface Props {
  children: ReactNode;
}

const LocalizationProvider: FC<Props> = ({ children }) => {
  return <MuiLocalizationProvider dateAdapter={AdapterDateFns}>{children}</MuiLocalizationProvider>;
};

export default LocalizationProvider;

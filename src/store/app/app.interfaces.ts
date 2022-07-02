import { AlertColor } from '@mui/material';

export interface IPayloadSetAlert {
  show: boolean;
  messages: string | null;
  severity?: AlertColor;
  autoHideDuration?: number;
  variant?: 'filled' | 'outlined';
}

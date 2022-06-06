// Enum action types.
import { StandardPaperSize } from '@/interfaces/paper';
import { SettingsActionTypes as Types } from './settings-actions.enum';

// Actions definitions.
interface ISettingsSetPaper {
  type: typeof Types.SETTINGS_SET_PAPER;
  payload: StandardPaperSize;
}

// Union actions type.
export type ISettingsActions = ISettingsSetPaper;

// Actions creator.
export const settings_setPaper = (payload: StandardPaperSize): ISettingsSetPaper => ({
  type: Types.SETTINGS_SET_PAPER,
  payload,
});

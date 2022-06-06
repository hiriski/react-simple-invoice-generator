// Settings action types.
import { SettingsActionTypes as Types } from './settings-actions.enum';

// Union actions type.
import { ISettingsActions } from './settings-actions';
import { StandardPaperSize } from '@/interfaces/paper';

// Settings state definition.
export interface ISettingsState {
  paperSize: StandardPaperSize;
}

// Init state.
const initialState: ISettingsState = {
  paperSize: 'A4' /** 👈 Default paper  */,
};

// Settings state reducer.
const settingsReducer = (state: ISettingsState = initialState, { type, payload }: ISettingsActions): ISettingsState => {
  switch (type) {
    case Types.SETTINGS_SET_PAPER:
      return {
        ...state,
        paperSize: payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;

// App action types.
import { AppActionTypes as Types } from './app-actions.enum';

// Union actions type.
import { AppActions } from './app-actions';

import type { IPayloadSetAlert } from './app.interfaces';

const DEFAULT_ADR = 3000;

// App state definition.
export interface IAppState {
  app_isLoading: boolean;
  app_showDrawerPreviewPdf: boolean;
  alert: IPayloadSetAlert;
}

// Init state.
const initialState: IAppState = {
  app_isLoading: false,
  app_showDrawerPreviewPdf: true,
  alert: {
    show: false,
    messages: null,
    severity: undefined,
    autoHideDuration: DEFAULT_ADR,
    variant: 'filled',
  },
};

// App state reducer.
const appReducer = (state: IAppState = initialState, { type, payload }: AppActions): IAppState => {
  switch (type) {
    case Types.app_SET_LOADING:
      return {
        ...state,
        app_isLoading: payload,
      };
    case Types.app_SET_ALERT:
      return {
        ...state,
        alert: {
          show: payload.show,
          messages: payload.messages ?? '',
          severity: payload.severity ?? 'success',
          autoHideDuration: payload.autoHideDuration ?? DEFAULT_ADR,
          variant: payload.variant ?? 'filled',
        },
      };

    case Types.app_RESET_ALERT:
      return {
        ...state,
        alert: initialState.alert,
      };
    default:
      return state;
  }
};

export default appReducer;

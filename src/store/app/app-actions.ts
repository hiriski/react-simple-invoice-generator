// Enum action types.
import { AppActionTypes as Types } from './app-actions.enum';
import { IPayloadSetAlert } from './app.interfaces';

// Actions definitions.
interface IAppSetLoading {
  type: typeof Types.app_SET_LOADING;
  payload: boolean;
}

interface IAppSetAlert {
  type: typeof Types.app_SET_ALERT;
  payload: IPayloadSetAlert;
}
interface IAppResetAlert {
  type: typeof Types.app_RESET_ALERT;
  payload: undefined;
}

// Union actions type.
export type AppActions = IAppSetLoading | IAppSetAlert | IAppResetAlert;

// Actions creator.
export const appSetLoading = (payload: boolean): IAppSetLoading => ({
  type: Types.app_SET_LOADING,
  payload,
});

export const app_setAlert = (payload: IPayloadSetAlert): IAppSetAlert => ({
  type: Types.app_SET_ALERT,
  payload,
});

export const app_resetAlert = (): IAppResetAlert => ({
  type: Types.app_RESET_ALERT,
  payload: undefined,
});

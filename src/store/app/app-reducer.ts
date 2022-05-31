// App action types.
import { AppActionTypes as Types } from './app-actions.enum';

// Union actions type.
import { AppActions } from './app-action';

// App state definition.
export interface IAppState {
  app_isLoading: boolean;
}

// Init state.
const initialState: IAppState = {
  app_isLoading: false,
};

// App state reducer.
const appReducer = (state: IAppState = initialState, { type, payload }: AppActions): IAppState => {
  switch (type) {
    case Types.APP_SET_LOADING:
      return {
        ...state,
        app_isLoading: payload,
      };
    default:
      return state;
  }
};

export default appReducer;

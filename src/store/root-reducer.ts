// Redux.
import { combineReducers } from 'redux';

// Reducers.
import appReducer, { IAppState } from './app/app-reducer';

// Interfaces.
export interface RootState {
  app: IAppState;
}

// Root reducer.
export const rootReducer = combineReducers<RootState>({
  app: appReducer,
});

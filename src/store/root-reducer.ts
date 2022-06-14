// Redux.
import { combineReducers } from 'redux';

// Reducers.
import appReducer, { IAppState } from './app/app-reducer';
import invoiceReducer, { IInvoiceState } from './invoice/invoice-reducer';
import settingsReducer, { ISettingsState } from './settings/settings-reducer';

// Interfaces.
export interface RootState {
  app: IAppState;
  settings: ISettingsState;
  invoice: IInvoiceState;
}

// Root reducer.
export const rootReducer = combineReducers<RootState>({
  app: appReducer,
  settings: settingsReducer,
  invoice: invoiceReducer,
});

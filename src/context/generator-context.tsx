import { createContext } from 'react';

export interface IGeneratorContext {
  editable: boolean;
  debug: boolean;
}

export const generatorContext = createContext<IGeneratorContext>({ editable: false, debug: true });

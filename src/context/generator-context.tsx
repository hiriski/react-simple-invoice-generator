import { IS_PROD } from '@/constants';
import { createContext } from 'react';

export interface IGeneratorContext {
  editable: boolean;
  debug: boolean;
  preview?: boolean;
}

export const generatorContext = createContext<IGeneratorContext>({ editable: false, debug: true, preview: !IS_PROD });

import { useContext } from 'react';
import { generatorContext, IGeneratorContext } from '@/context/generator-context';

export const useGenerator = (): IGeneratorContext => useContext<IGeneratorContext>(generatorContext);

import { join } from 'path';
import { rootDir } from './utils';

/**
 * @see https://webpack.js.org/guides/typescript/#loader
 */
export const typescriptRule = {
  test: /\.tsx?$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
  options: {
    // disable type checker - we will use it in fork plugin
    transpileOnly: true,
  },
};

/**
 * @see https://webpack.js.org/loaders/babel-loader
 */
export const javascriptRule = {
  test: /\.(js|jsx)$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        configFile: join(rootDir, '/.babelrc.js'),
      },
    },
  ],
  exclude: /node_modules/,
};

/**
 * @see https://webpack.js.org/loaders/html-loader
 */
export const htmlRule = {
  test: /\.(html)$/,
  use: {
    loader: 'html-loader',
  },
};

/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
export const imagesRule = {
  test: /\.(?:svg|ico|gif|png|jpg|jpeg)$/i,
  type: 'asset/resource',
};

/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
export const fontsRule = {
  test: /\.(woff(2)?|eot|ttf|otf|)$/i,
  type: 'asset/inline',
};

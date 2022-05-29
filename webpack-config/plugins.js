import { join } from 'path';
import { DefinePlugin, ProvidePlugin } from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { rootDir, isDev, isDevServer, isProd, mode } from './utils';

/**
 * Automatic load modules instead of having to import them anywhere.
 * @see https://webpack.js.org/plugins/provide-plugin/
 */
export const providePlugin = new ProvidePlugin({});

/**
 * The DefinePlugin replaces variables in code with other values at compile time.
 * @see https://webpack.js.org/plugins/define-plugin/
 */
export const definePlugin = new DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(mode),
  },
  IS_PROD: isProd,
  IS_DEV: isDev,
  IS_DEV_SERVER: isDevServer,
});

/**
 * A webpack plugin to remove/clean build folder
 * @see https://github.com/johnagan/clean-webpack-plugin
 */
export const cleanWebpackPlugin = new CleanWebpackPlugin({
  cleanOnceBeforeBuildPatterns: ['**/*', '!profile.json', '!tsconfig.tsbuildinfo'],
});

/**
 * HTML webpack plugin
 * @see https://webpack.js.org/plugins/html-webpack-plugin/
 */
export const htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  inject: true,
  template: join(rootDir, './src/index.html'),
});

/**
 * Copy individual files or entire directories.
 * @see https://webpack.js.org/plugins/copy-webpack-plugin/
 */
export const copyWebpackPlugin = new CopyWebpackPlugin({
  patterns: [{ from: join(rootDir, './src/assets'), to: 'assets' }],
});

/**
 * This plugin uses eslint to find and fix problems in your javascript code.
 * @see https://webpack.js.org/plugins/eslint-webpack-plugin/
 */
export const eslintWebpackPlugin = new ESLintWebpackPlugin({
  context: join(rootDir, '/src'),
  extensions: ['js', 'jsx', 'ts', 'tsx'],
});

/**
 * Webpack plugins that runs Typescript type checker on a separate process.
 * @see https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#readme
 */
export const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin({
  async: isDev,
  typescript: {
    configFile: join(rootDir, '/tsconfig.json'),
  },
});

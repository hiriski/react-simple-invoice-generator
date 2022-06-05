import { join } from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { DefinePlugin, ProvidePlugin } from 'webpack';

import { isDev, isDevServer, isProd, mode, rootDir } from './utils';

/**
 * Automatic load modules instead of having to import them anywhere.
 * @see https://webpack.js.org/plugins/provide-plugin/
 */
export const providePlugin = new ProvidePlugin({
  Buffer: ['buffer', 'Buffer'],
  process: 'process/browser',
});

/**
 * The DefinePlugin replaces variables in code with other values at compile time.
 * @see https://webpack.js.org/plugins/define-plugin/
 */
export const definePlugin = new DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(mode),
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
    memoryLimit: 4096,
  },
});

/**
 * Mini css plugin
 * @see https://webpack.js.org/plugins/mini-css-extract-plugin/
 */
export const miniCssExtractPlugin = new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: '[name].[contenthash].css',
  chunkFilename: '[id].[contenthash].css',
});

/**
 * Dot env plugin webpack
 * @see https://github.com/mrsteele/dotenv-webpack
 */
export const dotEnvPlugin = new Dotenv({});

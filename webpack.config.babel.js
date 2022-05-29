/**
 * Webpack configuration
 *
 * Created by: Riski Muhamad S <hi@riski.me>
 * 20:06 17/04/2022
 */

import { join } from 'path';
import merge from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { isProd, rootDir, isDevServer } from './webpack-config/utils';
import { htmlRule, fontsRule, imagesRule, javascriptRule, typescriptRule } from './webpack-config/rules';
import {
  definePlugin,
  providePlugin,
  cleanWebpackPlugin,
  htmlWebpackPlugin,
  copyWebpackPlugin,
  eslintWebpackPlugin,
  forkTsCheckerWebpackPlugin,
} from './webpack-config/plugins';

/**
 * base config
 */
const baseConfig = {
  context: __dirname,
  target: isDevServer ? 'web' : ['web', 'es5'],
  mode: isProd ? 'production' : 'development',
  entry: {
    main: [join(rootDir, '/src/index.tsx')],
  },
  output: {
    path: join(rootDir, '/dist'),
    publicPath: '/',
    filename: isDevServer ? '[name].[fullhash].js' : '[name].[contenthash].js',
  },
  module: {
    rules: [typescriptRule, javascriptRule, htmlRule, imagesRule, fontsRule],
  },
  plugins: [
    providePlugin,
    definePlugin,
    forkTsCheckerWebpackPlugin,
    eslintWebpackPlugin,
    cleanWebpackPlugin,
    htmlWebpackPlugin,
    copyWebpackPlugin,
  ],
  resolve: {
    alias: {
      '@': join(rootDir, '/src'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },

  /**
   * @see https://webpack.js.org/configuration/optimization/
   */
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
  },

  /**
   * @see https://webpack.js.org/configuration/externals/
   */
  // externals: "",
};

/**
 * Development config
 */
const developmentConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [new ReactRefreshWebpackPlugin()],
  devServer: {
    client: {
      overlay: false,
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    hot: true,
    proxy: {},
    static: {
      publicPath: '/',
    },
  },
};

/**
 * Production config
 */
const productionConfig = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({})],
  },
  plugins: [cleanWebpackPlugin],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

export default () => (isProd ? merge(baseConfig, productionConfig) : merge(baseConfig, developmentConfig));

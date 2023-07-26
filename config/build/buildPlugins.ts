import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {type BuildOptions} from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];
}

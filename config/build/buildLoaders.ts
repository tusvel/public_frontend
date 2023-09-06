import type webpack from 'webpack';
import {type BuildOptions} from './types/config';
import {buildCssLoader} from './loaders/buildCssLoader';
import {buildSvgLoader} from './loaders/buildSvgLoader';
import {buildBabelLoader} from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const {isDev} = options;
  
  const babel = buildBabelLoader(options);

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svg = buildSvgLoader();

  const scss = buildCssLoader(isDev);

  const typeScript = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    fileLoader,
    svg,
    babel,
    typeScript,
    scss,
  ];
}

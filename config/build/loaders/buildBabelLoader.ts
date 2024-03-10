import {type BuildOptions} from '../types/config';
import babelPropsRemovePlugin from '../babel/babelPropsRemovePlugin';

type buildBabelLoaderProps = {
  isTsx?: boolean;
} & BuildOptions;

export function buildBabelLoader(options: buildBabelLoaderProps) {
  const {isDev, isTsx} = options;
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
          [
            '@babel/plugin-transform-typescript', {isTsx},
          ],
          '@babel/plugin-transform-runtime',
          isTsx && [
            babelPropsRemovePlugin,
            {
              props: ['data-testid'],
            },
          ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
}

import { type BuildOptions } from '../types/config';
import babelPropsRemovePlugin from '../babel/babelPropsRemovePlugin';

type buildBabelLoaderProps = {
  isTsx?: boolean;
} & BuildOptions;

export function buildBabelLoader(options: buildBabelLoaderProps) {
  const { isDev, isTsx } = options;
  const isProd = !isDev;

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          ['@babel/plugin-transform-typescript', { isTsx }],
          '@babel/plugin-transform-runtime',
          isTsx &&
            isProd && [
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

import webpack from 'webpack';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };

  // Plugins
  if (config.plugins) {
    config.plugins.push(
      new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://public_frontend.ru'),
        __PROJECT__: JSON.stringify('storybook'),
      }),
    );
  }

  // Loaders
  config.module!.rules!.push(buildCssLoader(true));
  config.module!.rules = config.module!.rules?.map(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    (rule: webpack.RuleSetRule) => {
      // eslint-disable-next-line
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    },
  );
  config.module!.rules!.push(buildSvgLoader());

  config.resolve!.alias = {
    ...config.resolve!.alias,
    '@': paths.src,
  };

  // Resolvers
  config.resolve!.modules!.push(paths.src);

  return config;
};

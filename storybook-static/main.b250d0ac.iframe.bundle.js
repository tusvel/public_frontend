(self.webpackChunkpublic_frontend =
  self.webpackChunkpublic_frontend || []).push([
  [179],
  {
    './config/storybook/preview.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => storybook_preview,
        });
      __webpack_require__('./src/app/styles/index.scss');
      var jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        StyleDecorator = function StyleDecorator(StoryComponent) {
          return (0, jsx_runtime.jsx)(StoryComponent, {});
        };
      StyleDecorator.displayName = 'StyleDecorator';
      var ThemeDecorator = __webpack_require__(
          './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
        ),
        ThemeProvider = __webpack_require__(
          './src/app/providers/ThemeProvider/index.ts',
        ),
        dist = __webpack_require__(
          './node_modules/react-router-dom/dist/index.js',
        ),
        RouterDecorator = function RouterDecorator(StoryComponent) {
          return (0, jsx_runtime.jsx)(dist.VK, {
            children: (0, jsx_runtime.jsx)(StoryComponent, {}),
          });
        };
      RouterDecorator.displayName = 'RouterDecorator';
      const storybook_preview = {
        parameters: {
          actions: { argTypesRegex: '^on[A-Z].*' },
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/ },
          },
        },
        decorators: [
          StyleDecorator,
          RouterDecorator,
          (0, ThemeDecorator.F)(ThemeProvider.Q2.LIGHT),
        ],
      };
    },
    './src/app/providers/ThemeProvider/index.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        Q2: () => Theme,
        Fg: () => useTheme,
      });
      var react = __webpack_require__('./node_modules/react/index.js'),
        Theme = (function (Theme) {
          return (Theme.LIGHT = 'light'), (Theme.DARK = 'dark'), Theme;
        })({}),
        ThemeContext = (0, react.createContext)({}),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null != _i) {
              var _s,
                _e,
                _x,
                _r,
                _arr = [],
                _n = !0,
                _d = !1;
              try {
                if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
                  if (Object(_i) !== _i) return;
                  _n = !1;
                } else
                  for (
                    ;
                    !(_n = (_s = _x.call(_i)).done) &&
                    (_arr.push(_s.value), _arr.length !== i);
                    _n = !0
                  );
              } catch (err) {
                (_d = !0), (_e = err);
              } finally {
                try {
                  if (
                    !_n &&
                    null != _i.return &&
                    ((_r = _i.return()), Object(_r) !== _r)
                  )
                    return;
                } finally {
                  if (_d) throw _e;
                }
              }
              return _arr;
            }
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var defaultTheme = localStorage.getItem('theme') || Theme.LIGHT,
        ThemeProvider = function ThemeProvider(_ref) {
          var children = _ref.children,
            _useState2 = _slicedToArray((0, react.useState)(defaultTheme), 2),
            theme = _useState2[0],
            setTheme = _useState2[1],
            defaultProps = (0, react.useMemo)(
              function () {
                return { theme, setTheme };
              },
              [theme],
            );
          return (0, jsx_runtime.jsx)(ThemeContext.Provider, {
            value: defaultProps,
            children,
          });
        };
      ThemeProvider.displayName = 'ThemeProvider';
      try {
        (ThemeProvider.displayName = 'ThemeProvider'),
          (ThemeProvider.__docgenInfo = {
            description: '',
            displayName: 'ThemeProvider',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider'
            ] = {
              docgenInfo: ThemeProvider.__docgenInfo,
              name: 'ThemeProvider',
              path: 'src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var useTheme = function useTheme() {
        var _useContext = (0, react.useContext)(ThemeContext),
          theme = _useContext.theme,
          setTheme = _useContext.setTheme;
        return {
          theme,
          toggleTheme: function toggleTheme() {
            var newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
            setTheme(newTheme), localStorage.setItem('theme', newTheme);
          },
        };
      };
    },
    './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { F: () => ThemeDecorator });
      __webpack_require__('./src/app/styles/index.scss');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        ThemeDecorator = function ThemeDecorator(theme) {
          return function (StoryComponent) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              'div',
              {
                className: 'app '.concat(theme),
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  StoryComponent,
                  {},
                ),
              },
            );
          };
        };
      try {
        (ThemeDecorator.displayName = 'ThemeDecorator'),
          (ThemeDecorator.__docgenInfo = {
            description: '',
            displayName: 'ThemeDecorator',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator'
            ] = {
              docgenInfo: ThemeDecorator.__docgenInfo,
              name: 'ThemeDecorator',
              path: 'src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '*{margin:0;padding:0;box-sizing:border-box}input,button,textarea,select{margin:0;font:inherit}:root{--font-family-main: consolas, "Times New Roman", serif;--font-size-m: 16px;--font-line-m: 24px;--font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);--font-size-l: 24px;--font-line-l: 32px;--font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);--navbar-height: 50px }.app.dark{--bg-color: #474A51;--inverted-bg-color: #DCDCDC;--primary-color: #C3CBDE;--secondary-color: #CBE3F5;--inverted-primary-color: #333030;--inverted-secondary-color: #4A4342}.app.light{--bg-color: #DCDCDC;--inverted-bg-color: #474A51;--primary-color: #333030;--secondary-color: #4A4342;--inverted-primary-color: #C3CBDE;--inverted-secondary-color: #CBE3F5}.app{font:var(--font-m);background:var(--bg-color);color:var(--primary-color);min-height:100vh}.content-page{display:flex}.page-wrapper{flex:1 0 auto;padding:20px}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/app/styles/reset.scss',
              'webpack://./src/app/styles/variables/global.scss',
              'webpack://./src/app/styles/themes/dark.scss',
              'webpack://./src/app/styles/themes/light.scss',
              'webpack://./src/app/styles/index.scss',
            ],
            names: [],
            mappings:
              'AAAA,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CAGJ,6BAII,QAAA,CACA,YAAA,CCXJ,MACI,sDAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CAGA,sBAAA,CCVJ,UACI,mBAAA,CACA,4BAAA,CACA,wBAAA,CACA,0BAAA,CACA,iCAAA,CACA,mCAAA,CCNJ,WACI,mBAAA,CACA,4BAAA,CACA,wBAAA,CACA,0BAAA,CACA,iCAAA,CACA,mCAAA,CCDJ,KACI,kBAAA,CACA,0BAAA,CACA,0BAAA,CACA,gBAAA,CAGJ,cACI,YAAA,CAGJ,cACI,aAAA,CACA,YAAA',
            sourcesContent: [
              '* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    margin: 0;\n    font: inherit;\n}',
              ':root {\n    --font-family-main: consolas, "Times New Roman", serif;\n    --font-size-m: 16px;\n    --font-line-m: 24px;\n    --font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);\n    --font-size-l: 24px;\n    --font-line-l: 32px;\n    --font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);\n\n    // Размеры\n    --navbar-height: 50px\n}',
              '.app.dark {\n    --bg-color: #474A51;\n    --inverted-bg-color: #DCDCDC;\n    --primary-color: #C3CBDE;\n    --secondary-color: #CBE3F5;\n    --inverted-primary-color: #333030;\n    --inverted-secondary-color: #4A4342;\n}',
              '.app.light {\n    --bg-color: #DCDCDC;\n    --inverted-bg-color: #474A51;\n    --primary-color: #333030;\n    --secondary-color: #4A4342;\n    --inverted-primary-color: #C3CBDE;\n    --inverted-secondary-color: #CBE3F5;\n}',
              '@import "reset";\n@import "./variables/global";\n@import "./themes/dark";\n@import "./themes/light";\n\n.app {\n    font: var(--font-m);\n    background: var(--bg-color);\n    color: var(--primary-color);\n    min-height: 100vh;\n}\n\n.content-page {\n    display: flex;\n}\n\n.page-wrapper {\n    flex: 1 0 auto;\n    padding: 20px;\n}\n',
            ],
            sourceRoot: '',
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/jest-util/build lazy recursive': (module) => {
      function webpackEmptyAsyncContext(req) {
        return Promise.resolve().then(() => {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (webpackEmptyAsyncContext.keys = () => []),
        (webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext),
        (webpackEmptyAsyncContext.id =
          './node_modules/jest-util/build lazy recursive'),
        (module.exports = webpackEmptyAsyncContext);
    },
    './node_modules/jest-util/build sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          './node_modules/jest-util/build sync recursive'),
        (module.exports = webpackEmptyContext);
    },
    './src/app/styles/index.scss': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          ),
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          ),
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          ),
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          ),
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/style-loader/dist/runtime/insertBySelector.js',
          ),
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          ),
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          ),
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          ),
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          ),
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          ),
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          ),
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss',
          ),
        options = {};
      (options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default()),
        (options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default()),
        (options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          )),
        (options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default()),
        (options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
      _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z,
        options,
      ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__
            .Z.locals &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__
            .Z.locals;
    },
    './src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts%7Ctsx))$':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          './pages/AboutPage/ui/AboutPage.stories': [
            './src/pages/AboutPage/ui/AboutPage.stories.tsx',
            117,
            821,
          ],
          './pages/AboutPage/ui/AboutPage.stories.tsx': [
            './src/pages/AboutPage/ui/AboutPage.stories.tsx',
            117,
            821,
          ],
          './pages/MainPage/ui/MainPage.stories': [
            './src/pages/MainPage/ui/MainPage.stories.tsx',
            117,
            384,
          ],
          './pages/MainPage/ui/MainPage.stories.tsx': [
            './src/pages/MainPage/ui/MainPage.stories.tsx',
            117,
            384,
          ],
          './pages/NotFoundPage/ui/NotFoundPage.stories': [
            './src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx',
            117,
            967,
          ],
          './pages/NotFoundPage/ui/NotFoundPage.stories.tsx': [
            './src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx',
            117,
            967,
          ],
          './shared/ui/AppLink/AppLink.stories': [
            './src/shared/ui/AppLink/AppLink.stories.tsx',
            210,
          ],
          './shared/ui/AppLink/AppLink.stories.tsx': [
            './src/shared/ui/AppLink/AppLink.stories.tsx',
            210,
          ],
          './shared/ui/Button/Button.stories': [
            './src/shared/ui/Button/Button.stories.tsx',
            982,
          ],
          './shared/ui/Button/Button.stories.tsx': [
            './src/shared/ui/Button/Button.stories.tsx',
            982,
          ],
          './shared/ui/Loader/Loader.stories': [
            './src/shared/ui/Loader/Loader.stories.tsx',
            533,
          ],
          './shared/ui/Loader/Loader.stories.tsx': [
            './src/shared/ui/Loader/Loader.stories.tsx',
            533,
          ],
          './widgets/LangSwitcher/ui/LangSwitcher.stories': [
            './src/widgets/LangSwitcher/ui/LangSwitcher.stories.tsx',
            117,
            242,
          ],
          './widgets/LangSwitcher/ui/LangSwitcher.stories.tsx': [
            './src/widgets/LangSwitcher/ui/LangSwitcher.stories.tsx',
            117,
            242,
          ],
          './widgets/Navbar/ui/Navbar.stories': [
            './src/widgets/Navbar/ui/Navbar.stories.tsx',
            117,
            811,
          ],
          './widgets/Navbar/ui/Navbar.stories.tsx': [
            './src/widgets/Navbar/ui/Navbar.stories.tsx',
            117,
            811,
          ],
          './widgets/PageError/ui/PageError.stories': [
            './src/widgets/PageError/ui/PageError.stories.tsx',
            117,
            596,
          ],
          './widgets/PageError/ui/PageError.stories.tsx': [
            './src/widgets/PageError/ui/PageError.stories.tsx',
            117,
            596,
          ],
          './widgets/PageLoader/ui/PageLoader.stories': [
            './src/widgets/PageLoader/ui/PageLoader.stories.tsx',
            491,
          ],
          './widgets/PageLoader/ui/PageLoader.stories.tsx': [
            './src/widgets/PageLoader/ui/PageLoader.stories.tsx',
            491,
          ],
          './widgets/Sidebar/ui/Sidebar/Sidebar.stories': [
            './src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx',
            117,
            363,
          ],
          './widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx': [
            './src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx',
            117,
            363,
          ],
          './widgets/ThemeSwitcher/ui/ThemeSwitcher.stories': [
            './src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx',
            67,
          ],
          './widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx': [
            './src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx',
            67,
          ],
        };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            });
          var ids = map[req],
            id = ids[0];
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() =>
            __webpack_require__(id),
          );
        }
        (webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            './src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts%7Ctsx))$'),
          (module.exports = webpackAsyncContext);
      },
    './storybook-config-entry.js': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      var dist = __webpack_require__(
          './node_modules/@storybook/global/dist/index.mjs',
        ),
        external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__(
          '@storybook/preview-api',
        ),
        external_STORYBOOK_MODULE_CHANNELS_ = __webpack_require__(
          '@storybook/channels',
        );
      const importers = [
        async (path) => {
          if (
            !/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(ts|tsx))$/.exec(
              path,
            )
          )
            return;
          const pathRemainder = path.substring(6);
          return __webpack_require__(
            './src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts%7Ctsx))$',
          )('./' + pathRemainder);
        },
      ];
      const channel = (0,
      external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({
        page: 'preview',
      });
      external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),
        'DEVELOPMENT' === dist.global.CONFIG_TYPE &&
          (window.__STORYBOOK_SERVER_CHANNEL__ = channel);
      const preview = new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb();
      (window.__STORYBOOK_PREVIEW__ = preview),
        (window.__STORYBOOK_STORY_STORE__ = preview.storyStore),
        (window.__STORYBOOK_ADDONS_CHANNEL__ = channel),
        (window.__STORYBOOK_CLIENT_API__ =
          new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({
            storyStore: preview.storyStore,
          })),
        preview.initialize({
          importFn: async function importFn(path) {
            for (let i = 0; i < importers.length; i++) {
              const moduleExports = await ((x = () => importers[i](path)), x());
              if (moduleExports) return moduleExports;
            }
            var x;
          },
          getProjectAnnotations: () =>
            (0, external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([
              __webpack_require__('./node_modules/@storybook/react/preview.js'),
              __webpack_require__(
                './node_modules/@storybook/addon-links/dist/preview.mjs',
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/docs/preview.mjs',
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/actions/preview.mjs',
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs',
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/measure/preview.mjs',
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/outline/preview.mjs',
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs',
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-interactions/dist/preview.mjs',
              ),
              __webpack_require__('./config/storybook/preview.tsx'),
            ]),
        });
    },
    '@storybook/channels': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_CHANNELS__;
    },
    '@storybook/client-logger': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;
    },
    '@storybook/core-events': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_CORE_EVENTS__;
    },
    '@storybook/preview-api': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_PREVIEW_API__;
    },
    '?cbdb': () => {},
    '?e654': () => {},
    '?4f7e': () => {},
  },
  (__webpack_require__) => {
    __webpack_require__.O(0, [664], () => {
      return (
        (moduleId = './storybook-config-entry.js'),
        __webpack_require__((__webpack_require__.s = moduleId))
      );
      var moduleId;
    });
    __webpack_require__.O();
  },
]);

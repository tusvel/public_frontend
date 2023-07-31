'use strict';
(self.webpackChunkpublic_frontend =
  self.webpackChunkpublic_frontend || []).push([
  [210],
  {
    './src/shared/ui/AppLink/AppLink.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          InvertedPrimary: () => InvertedPrimary,
          InvertedPrimaryDark: () => InvertedPrimaryDark,
          InvertedSecondary: () => InvertedSecondary,
          InvertedSecondaryDark: () => InvertedSecondaryDark,
          Primary: () => Primary,
          PrimaryDark: () => PrimaryDark,
          Secondary: () => Secondary,
          SecondaryDark: () => SecondaryDark,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Primary$parameters,
        _Primary$parameters2,
        _Secondary$parameters,
        _Secondary$parameters2,
        _InvertedPrimary$para,
        _InvertedPrimary$para2,
        _InvertedSecondary$pa,
        _InvertedSecondary$pa2,
        _PrimaryDark$paramete,
        _PrimaryDark$paramete2,
        _SecondaryDark$parame,
        _SecondaryDark$parame2,
        _InvertedPrimaryDark$,
        _InvertedPrimaryDark$2,
        _InvertedSecondaryDar,
        _InvertedSecondaryDar2,
        _AppLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/shared/ui/AppLink/AppLink.tsx',
        ),
        shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
          ),
        app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./src/app/providers/ThemeProvider/index.ts');
      function _typeof(obj) {
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    'function' == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source),
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key),
                );
              });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          (key = (function _toPropertyKey(arg) {
            var key = (function _toPrimitive(input, hint) {
              if ('object' !== _typeof(input) || null === input) return input;
              var prim = input[Symbol.toPrimitive];
              if (void 0 !== prim) {
                var res = prim.call(input, hint || 'default');
                if ('object' !== _typeof(res)) return res;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.',
                );
              }
              return ('string' === hint ? String : Number)(input);
            })(arg, 'string');
            return 'symbol' === _typeof(key) ? key : String(key);
          })(key)) in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'shared/AppLink',
        component: _AppLink__WEBPACK_IMPORTED_MODULE_0__.F,
        parameters: { layout: 'fullscreen' },
      };
      var Primary = {
          args: {
            children: 'Text',
            to: '/',
            theme: _AppLink__WEBPACK_IMPORTED_MODULE_0__.u.PRIMARY,
          },
        },
        Secondary = {
          args: {
            children: 'Text',
            to: '/',
            theme: _AppLink__WEBPACK_IMPORTED_MODULE_0__.u.SECONDARY,
          },
        },
        InvertedPrimary = {
          args: {
            children: 'Text',
            to: '/',
            theme: _AppLink__WEBPACK_IMPORTED_MODULE_0__.u.INVERTED_PRIMARY,
          },
        },
        InvertedSecondary = {
          args: {
            children: 'Text',
            to: '/',
            theme: _AppLink__WEBPACK_IMPORTED_MODULE_0__.u.INVERTED_SECONDARY,
          },
        },
        PrimaryDark = {
          args: {
            children: 'Text',
            to: '/',
            theme: _AppLink__WEBPACK_IMPORTED_MODULE_0__.u.PRIMARY,
          },
          decorators: [
            (0,
            shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.F)(
              app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Q2.DARK,
            ),
          ],
        },
        SecondaryDark = {
          args: {
            children: 'Text',
            to: '/',
            theme: _AppLink__WEBPACK_IMPORTED_MODULE_0__.u.SECONDARY,
          },
          decorators: [
            (0,
            shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.F)(
              app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Q2.DARK,
            ),
          ],
        },
        InvertedPrimaryDark = {
          args: {
            children: 'Text',
            to: '/',
            theme: _AppLink__WEBPACK_IMPORTED_MODULE_0__.u.INVERTED_PRIMARY,
          },
          decorators: [
            (0,
            shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.F)(
              app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Q2.DARK,
            ),
          ],
        },
        InvertedSecondaryDark = {
          args: {
            children: 'Text',
            to: '/',
            theme: _AppLink__WEBPACK_IMPORTED_MODULE_0__.u.INVERTED_SECONDARY,
          },
          decorators: [
            (0,
            shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.F)(
              app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Q2.DARK,
            ),
          ],
        };
      (Primary.parameters = _objectSpread(
        _objectSpread({}, Primary.parameters),
        {},
        {
          docs: _objectSpread(
            _objectSpread(
              {},
              null === (_Primary$parameters = Primary.parameters) ||
                void 0 === _Primary$parameters
                ? void 0
                : _Primary$parameters.docs,
            ),
            {},
            {
              source: _objectSpread(
                {
                  originalSource:
                    "{\n  args: {\n    children: 'Text',\n    to: '/',\n    theme: AppLinkTheme.PRIMARY\n  }\n}",
                },
                null === (_Primary$parameters2 = Primary.parameters) ||
                  void 0 === _Primary$parameters2 ||
                  null === (_Primary$parameters2 = _Primary$parameters2.docs) ||
                  void 0 === _Primary$parameters2
                  ? void 0
                  : _Primary$parameters2.source,
              ),
            },
          ),
        },
      )),
        (Secondary.parameters = _objectSpread(
          _objectSpread({}, Secondary.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null === (_Secondary$parameters = Secondary.parameters) ||
                  void 0 === _Secondary$parameters
                  ? void 0
                  : _Secondary$parameters.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "{\n  args: {\n    children: 'Text',\n    to: '/',\n    theme: AppLinkTheme.SECONDARY\n  }\n}",
                  },
                  null === (_Secondary$parameters2 = Secondary.parameters) ||
                    void 0 === _Secondary$parameters2 ||
                    null ===
                      (_Secondary$parameters2 = _Secondary$parameters2.docs) ||
                    void 0 === _Secondary$parameters2
                    ? void 0
                    : _Secondary$parameters2.source,
                ),
              },
            ),
          },
        )),
        (InvertedPrimary.parameters = _objectSpread(
          _objectSpread({}, InvertedPrimary.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null === (_InvertedPrimary$para = InvertedPrimary.parameters) ||
                  void 0 === _InvertedPrimary$para
                  ? void 0
                  : _InvertedPrimary$para.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "{\n  args: {\n    children: 'Text',\n    to: '/',\n    theme: AppLinkTheme.INVERTED_PRIMARY\n  }\n}",
                  },
                  null ===
                    (_InvertedPrimary$para2 = InvertedPrimary.parameters) ||
                    void 0 === _InvertedPrimary$para2 ||
                    null ===
                      (_InvertedPrimary$para2 = _InvertedPrimary$para2.docs) ||
                    void 0 === _InvertedPrimary$para2
                    ? void 0
                    : _InvertedPrimary$para2.source,
                ),
              },
            ),
          },
        )),
        (InvertedSecondary.parameters = _objectSpread(
          _objectSpread({}, InvertedSecondary.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null ===
                  (_InvertedSecondary$pa = InvertedSecondary.parameters) ||
                  void 0 === _InvertedSecondary$pa
                  ? void 0
                  : _InvertedSecondary$pa.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "{\n  args: {\n    children: 'Text',\n    to: '/',\n    theme: AppLinkTheme.INVERTED_SECONDARY\n  }\n}",
                  },
                  null ===
                    (_InvertedSecondary$pa2 = InvertedSecondary.parameters) ||
                    void 0 === _InvertedSecondary$pa2 ||
                    null ===
                      (_InvertedSecondary$pa2 = _InvertedSecondary$pa2.docs) ||
                    void 0 === _InvertedSecondary$pa2
                    ? void 0
                    : _InvertedSecondary$pa2.source,
                ),
              },
            ),
          },
        )),
        (PrimaryDark.parameters = _objectSpread(
          _objectSpread({}, PrimaryDark.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null === (_PrimaryDark$paramete = PrimaryDark.parameters) ||
                  void 0 === _PrimaryDark$paramete
                  ? void 0
                  : _PrimaryDark$paramete.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "{\n  args: {\n    children: 'Text',\n    to: '/',\n    theme: AppLinkTheme.PRIMARY\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
                  },
                  null === (_PrimaryDark$paramete2 = PrimaryDark.parameters) ||
                    void 0 === _PrimaryDark$paramete2 ||
                    null ===
                      (_PrimaryDark$paramete2 = _PrimaryDark$paramete2.docs) ||
                    void 0 === _PrimaryDark$paramete2
                    ? void 0
                    : _PrimaryDark$paramete2.source,
                ),
              },
            ),
          },
        )),
        (SecondaryDark.parameters = _objectSpread(
          _objectSpread({}, SecondaryDark.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null === (_SecondaryDark$parame = SecondaryDark.parameters) ||
                  void 0 === _SecondaryDark$parame
                  ? void 0
                  : _SecondaryDark$parame.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "{\n  args: {\n    children: 'Text',\n    to: '/',\n    theme: AppLinkTheme.SECONDARY\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
                  },
                  null ===
                    (_SecondaryDark$parame2 = SecondaryDark.parameters) ||
                    void 0 === _SecondaryDark$parame2 ||
                    null ===
                      (_SecondaryDark$parame2 = _SecondaryDark$parame2.docs) ||
                    void 0 === _SecondaryDark$parame2
                    ? void 0
                    : _SecondaryDark$parame2.source,
                ),
              },
            ),
          },
        )),
        (InvertedPrimaryDark.parameters = _objectSpread(
          _objectSpread({}, InvertedPrimaryDark.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null ===
                  (_InvertedPrimaryDark$ = InvertedPrimaryDark.parameters) ||
                  void 0 === _InvertedPrimaryDark$
                  ? void 0
                  : _InvertedPrimaryDark$.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "{\n  args: {\n    children: 'Text',\n    to: '/',\n    theme: AppLinkTheme.INVERTED_PRIMARY\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
                  },
                  null ===
                    (_InvertedPrimaryDark$2 = InvertedPrimaryDark.parameters) ||
                    void 0 === _InvertedPrimaryDark$2 ||
                    null ===
                      (_InvertedPrimaryDark$2 = _InvertedPrimaryDark$2.docs) ||
                    void 0 === _InvertedPrimaryDark$2
                    ? void 0
                    : _InvertedPrimaryDark$2.source,
                ),
              },
            ),
          },
        )),
        (InvertedSecondaryDark.parameters = _objectSpread(
          _objectSpread({}, InvertedSecondaryDark.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null ===
                  (_InvertedSecondaryDar = InvertedSecondaryDark.parameters) ||
                  void 0 === _InvertedSecondaryDar
                  ? void 0
                  : _InvertedSecondaryDar.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "{\n  args: {\n    children: 'Text',\n    to: '/',\n    theme: AppLinkTheme.INVERTED_SECONDARY\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",
                  },
                  null ===
                    (_InvertedSecondaryDar2 =
                      InvertedSecondaryDark.parameters) ||
                    void 0 === _InvertedSecondaryDar2 ||
                    null ===
                      (_InvertedSecondaryDar2 = _InvertedSecondaryDar2.docs) ||
                    void 0 === _InvertedSecondaryDar2
                    ? void 0
                    : _InvertedSecondaryDar2.source,
                ),
              },
            ),
          },
        ));
      var __namedExportsOrder = [
        'Primary',
        'Secondary',
        'InvertedPrimary',
        'InvertedSecondary',
        'PrimaryDark',
        'SecondaryDark',
        'InvertedPrimaryDark',
        'InvertedSecondaryDark',
      ];
    },
    './src/shared/lib/classNames/classNames.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
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
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          })(arr) ||
          (function _iterableToArray(iter) {
            if (
              ('undefined' != typeof Symbol && null != iter[Symbol.iterator]) ||
              null != iter['@@iterator']
            )
              return Array.from(iter);
          })(arr) ||
          _unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function classNames(cls) {
        var mods =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return [cls]
          .concat(
            _toConsumableArray(
              (arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : []
              ).filter(Boolean),
            ),
            _toConsumableArray(
              Object.entries(mods)
                .filter(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                    value = (_ref2[0], _ref2[1]);
                  return Boolean(value);
                })
                .map(function (_ref3) {
                  return _slicedToArray(_ref3, 1)[0];
                }),
            ),
          )
          .join(' ');
      }
      __webpack_require__.d(__webpack_exports__, { A: () => classNames });
    },
    './src/shared/ui/AppLink/AppLink.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        F: () => AppLink,
        u: () => AppLinkTheme,
      });
      var classNames = __webpack_require__(
          './src/shared/lib/classNames/classNames.ts',
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        AppLink_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss',
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(AppLink_module.Z, options);
      const AppLink_AppLink_module =
        AppLink_module.Z && AppLink_module.Z.locals
          ? AppLink_module.Z.locals
          : void 0;
      var dist = __webpack_require__(
          './node_modules/react-router-dom/dist/index.js',
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      function _typeof(obj) {
        return (
          (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    'function' == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      var _excluded = ['to', 'className', 'children', 'theme'];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source),
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key),
                );
              });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          (key = (function _toPropertyKey(arg) {
            var key = (function _toPrimitive(input, hint) {
              if ('object' !== _typeof(input) || null === input) return input;
              var prim = input[Symbol.toPrimitive];
              if (void 0 !== prim) {
                var res = prim.call(input, hint || 'default');
                if ('object' !== _typeof(res)) return res;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.',
                );
              }
              return ('string' === hint ? String : Number)(input);
            })(arg, 'string');
            return 'symbol' === _typeof(key) ? key : String(key);
          })(key)) in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var AppLinkTheme = (function (AppLinkTheme) {
          return (
            (AppLinkTheme.PRIMARY = 'primary'),
            (AppLinkTheme.SECONDARY = 'secondary'),
            (AppLinkTheme.INVERTED_PRIMARY = 'invertedPrimary'),
            (AppLinkTheme.INVERTED_SECONDARY = 'invertedSecondary'),
            AppLinkTheme
          );
        })({}),
        AppLink = function AppLink(props) {
          var to = props.to,
            className = props.className,
            children = props.children,
            _props$theme = props.theme,
            theme =
              void 0 === _props$theme ? AppLinkTheme.PRIMARY : _props$theme,
            otherProps = _objectWithoutProperties(props, _excluded);
          return (0, jsx_runtime.jsx)(
            dist.rU,
            _objectSpread(
              _objectSpread(
                {
                  className: (0, classNames.A)('', {}, [
                    className,
                    AppLink_AppLink_module[theme],
                  ]),
                  to,
                },
                otherProps,
              ),
              {},
              { children },
            ),
          );
        };
      AppLink.displayName = 'AppLink';
      try {
        (AppLink.displayName = 'AppLink'),
          (AppLink.__docgenInfo = {
            description: '',
            displayName: 'AppLink',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"invertedPrimary"' },
                    { value: '"invertedSecondary"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/shared/ui/AppLink/AppLink.tsx#AppLink'
            ] = {
              docgenInfo: AppLink.__docgenInfo,
              name: 'AppLink',
              path: 'src/shared/ui/AppLink/AppLink.tsx#AppLink',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss':
      (module, __webpack_exports__, __webpack_require__) => {
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
          '.src-shared-ui-AppLink-AppLink-module__primary--lPwbq{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__secondary--E8eho{color:var(--secondary-color)}.src-shared-ui-AppLink-AppLink-module__invertedPrimary--CrYq9{color:var(--inverted-primary-color)}.src-shared-ui-AppLink-AppLink-module__invertedSecondary--NeC8t{color:var(--inverted-secondary-color)}',
          '',
          {
            version: 3,
            sources: ['webpack://./src/shared/ui/AppLink/AppLink.module.scss'],
            names: [],
            mappings:
              'AAAA,sDACC,0BAAA,CAGD,wDACC,4BAAA,CAGD,8DACC,mCAAA,CAGD,gEACC,qCAAA',
            sourcesContent: [
              '.primary {\n\tcolor: var(--primary-color);\n}\n\n.secondary {\n\tcolor: var(--secondary-color);\n}\n\n.invertedPrimary {\n\tcolor: var(--inverted-primary-color);\n}\n\n.invertedSecondary {\n\tcolor: var(--inverted-secondary-color)\n}',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            primary: 'src-shared-ui-AppLink-AppLink-module__primary--lPwbq',
            secondary: 'src-shared-ui-AppLink-AppLink-module__secondary--E8eho',
            invertedPrimary:
              'src-shared-ui-AppLink-AppLink-module__invertedPrimary--CrYq9',
            invertedSecondary:
              'src-shared-ui-AppLink-AppLink-module__invertedSecondary--NeC8t',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);

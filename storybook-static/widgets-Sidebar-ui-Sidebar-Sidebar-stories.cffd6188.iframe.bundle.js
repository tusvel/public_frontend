'use strict';
(self.webpackChunkpublic_frontend =
  self.webpackChunkpublic_frontend || []).push([
  [363],
  {
    './src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Sidebar_stories,
        });
      var react = __webpack_require__('./node_modules/react/index.js'),
        classNames = __webpack_require__(
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
        Sidebar_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss',
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Sidebar_module.Z, options);
      const Sidebar_Sidebar_module =
        Sidebar_module.Z && Sidebar_module.Z.locals
          ? Sidebar_module.Z.locals
          : void 0;
      var Button = __webpack_require__('./src/shared/ui/Button/Button.tsx'),
        ThemeSwitcher = __webpack_require__(
          './src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx',
        ),
        LangSwitcher = __webpack_require__(
          './src/widgets/LangSwitcher/ui/LangSwitcher.tsx',
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
      var Sidebar = function Sidebar(props) {
        var className = props.className,
          _useState2 = _slicedToArray((0, react.useState)(!1), 2),
          collapsed = _useState2[0],
          setCollapsed = _useState2[1];
        return (0, jsx_runtime.jsxs)('div', {
          'data-testid': 'sidebar',
          className: (0, classNames.A)(
            Sidebar_Sidebar_module.Sidebar,
            _defineProperty({}, Sidebar_Sidebar_module.collapsed, collapsed),
            [className],
          ),
          children: [
            (0, jsx_runtime.jsx)(Button.z, {
              'data-testid': 'sidebar-toggle',
              onClick: function toggleCollapsed() {
                setCollapsed(function (prev) {
                  return !prev;
                });
              },
              children: 'TOGGLE',
            }),
            (0, jsx_runtime.jsxs)('div', {
              className: Sidebar_Sidebar_module.switchers,
              children: [
                (0, jsx_runtime.jsx)(ThemeSwitcher.O, {}),
                (0, jsx_runtime.jsx)(LangSwitcher.k, {
                  className: Sidebar_Sidebar_module.LangSwitcher,
                }),
              ],
            }),
          ],
        });
      };
      Sidebar.displayName = 'Sidebar';
      try {
        (Sidebar.displayName = 'Sidebar'),
          (Sidebar.__docgenInfo = {
            description: '',
            displayName: 'Sidebar',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx#Sidebar'
            ] = {
              docgenInfo: Sidebar.__docgenInfo,
              name: 'Sidebar',
              path: 'src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx#Sidebar',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _Light$parameters,
        _Light$parameters2,
        _Dark$parameters,
        _Dark$parameters2,
        ThemeDecorator = __webpack_require__(
          './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
        ),
        ThemeProvider = __webpack_require__(
          './src/app/providers/ThemeProvider/index.ts',
        );
      function Sidebar_stories_typeof(obj) {
        return (
          (Sidebar_stories_typeof =
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
          Sidebar_stories_typeof(obj)
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
                Sidebar_stories_defineProperty(target, key, source[key]);
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
      function Sidebar_stories_defineProperty(obj, key, value) {
        return (
          (key = (function Sidebar_stories_toPropertyKey(arg) {
            var key = (function Sidebar_stories_toPrimitive(input, hint) {
              if ('object' !== Sidebar_stories_typeof(input) || null === input)
                return input;
              var prim = input[Symbol.toPrimitive];
              if (void 0 !== prim) {
                var res = prim.call(input, hint || 'default');
                if ('object' !== Sidebar_stories_typeof(res)) return res;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.',
                );
              }
              return ('string' === hint ? String : Number)(input);
            })(arg, 'string');
            return 'symbol' === Sidebar_stories_typeof(key) ? key : String(key);
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
      const Sidebar_stories = {
        title: 'widgets/Sidebar',
        component: Sidebar,
        parameters: { layout: 'fullscreen' },
      };
      var Light = { args: {} },
        Dark = {
          args: {},
          decorators: [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)],
        };
      (Light.parameters = _objectSpread(
        _objectSpread({}, Light.parameters),
        {},
        {
          docs: _objectSpread(
            _objectSpread(
              {},
              null === (_Light$parameters = Light.parameters) ||
                void 0 === _Light$parameters
                ? void 0
                : _Light$parameters.docs,
            ),
            {},
            {
              source: _objectSpread(
                { originalSource: '{\n  args: {}\n}' },
                null === (_Light$parameters2 = Light.parameters) ||
                  void 0 === _Light$parameters2 ||
                  null === (_Light$parameters2 = _Light$parameters2.docs) ||
                  void 0 === _Light$parameters2
                  ? void 0
                  : _Light$parameters2.source,
              ),
            },
          ),
        },
      )),
        (Dark.parameters = _objectSpread(
          _objectSpread({}, Dark.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null === (_Dark$parameters = Dark.parameters) ||
                  void 0 === _Dark$parameters
                  ? void 0
                  : _Dark$parameters.docs,
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      '{\n  args: {},\n  decorators: [ThemeDecorator(Theme.DARK)]\n}',
                  },
                  null === (_Dark$parameters2 = Dark.parameters) ||
                    void 0 === _Dark$parameters2 ||
                    null === (_Dark$parameters2 = _Dark$parameters2.docs) ||
                    void 0 === _Dark$parameters2
                    ? void 0
                    : _Dark$parameters2.source,
                ),
              },
            ),
          },
        ));
      var __namedExportsOrder = ['Light', 'Dark'];
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
    './src/shared/ui/Button/Button.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        z: () => Button,
        b: () => ButtonTheme,
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
        Button_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss',
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Button_module.Z, options);
      const Button_Button_module =
        Button_module.Z && Button_module.Z.locals
          ? Button_module.Z.locals
          : void 0;
      var jsx_runtime = __webpack_require__(
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
      var _excluded = ['className', 'children', 'theme'];
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
      var ButtonTheme = (function (ButtonTheme) {
          return (
            (ButtonTheme.CLEAR = 'clear'),
            (ButtonTheme.DEFAULT = 'default'),
            (ButtonTheme.OUTLINE = 'outline'),
            ButtonTheme
          );
        })({}),
        Button = function Button(props) {
          var className = props.className,
            children = props.children,
            _props$theme = props.theme,
            theme =
              void 0 === _props$theme ? ButtonTheme.DEFAULT : _props$theme,
            otherProps = _objectWithoutProperties(props, _excluded);
          return (0, jsx_runtime.jsx)(
            'button',
            _objectSpread(
              _objectSpread(
                {
                  className: (0, classNames.A)(
                    Button_Button_module.Button,
                    {},
                    [className, Button_Button_module[theme]],
                  ),
                },
                otherProps,
              ),
              {},
              { children },
            ),
          );
        };
      Button.displayName = 'Button';
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
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
                    { value: '"clear"' },
                    { value: '"default"' },
                    { value: '"outline"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/shared/ui/Button/Button.tsx#Button'] =
              {
                docgenInfo: Button.__docgenInfo,
                name: 'Button',
                path: 'src/shared/ui/Button/Button.tsx#Button',
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/widgets/LangSwitcher/ui/LangSwitcher.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { k: () => LangSwitcher });
      var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./src/shared/lib/classNames/classNames.ts'),
        shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__('./src/shared/ui/Button/Button.tsx'),
        react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react-i18next/dist/es/index.js',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        LangSwitcher = function LangSwitcher(props) {
          var _useTranslation = (0,
            react_i18next__WEBPACK_IMPORTED_MODULE_1__.$G)(),
            t = _useTranslation.t,
            i18n = _useTranslation.i18n,
            className = props.className;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_0__.z,
            {
              className: (0,
              shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.A)(
                '',
                {},
                [className],
              ),
              onClick: function toggleLanguage() {
                i18n.changeLanguage('ru' === i18n.language ? 'en' : 'ru').then(
                  function () {},
                  function () {},
                );
              },
              children: t('Язык'),
            },
          );
        };
      LangSwitcher.displayName = 'LangSwitcher';
      try {
        (LangSwitcher.displayName = 'LangSwitcher'),
          (LangSwitcher.__docgenInfo = {
            description: '',
            displayName: 'LangSwitcher',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/widgets/LangSwitcher/ui/LangSwitcher.tsx#LangSwitcher'
            ] = {
              docgenInfo: LangSwitcher.__docgenInfo,
              name: 'LangSwitcher',
              path: 'src/widgets/LangSwitcher/ui/LangSwitcher.tsx#LangSwitcher',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { O: () => ThemeSwitcher });
      var _defs,
        _path,
        ThemeProvider = __webpack_require__(
          './src/app/providers/ThemeProvider/index.ts',
        ),
        react = __webpack_require__('./node_modules/react/index.js');
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      const light = function SvgLight(props) {
        return react.createElement(
          'svg',
          _extends(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              id: 'light_svg__Layer_1',
              'data-name': 'Layer 1',
              viewBox: '0 0 64 64',
            },
            props,
          ),
          _defs ||
            (_defs = react.createElement(
              'defs',
              null,
              react.createElement(
                'style',
                null,
                '.light_svg__cls-2{fill:none;stroke:#f9d71c;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px}',
              ),
            )),
          react.createElement('circle', {
            cx: 32,
            cy: 32,
            r: 17,
            style: { fill: '#f9d71c' },
          }),
          _path ||
            (_path = react.createElement('path', {
              d: 'M32 5v6M32 53v6M59 32h-6M11 32H5M51.09 12.91l-4.24 4.24M17.15 46.85l-4.24 4.24M51.09 51.09l-4.24-4.24M17.15 17.15l-4.24-4.24',
              className: 'light_svg__cls-2',
            })),
        );
      };
      function dark_extends() {
        return (
          (dark_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          dark_extends.apply(this, arguments)
        );
      }
      const dark = function SvgDark(props) {
        return react.createElement(
          'svg',
          dark_extends(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              'data-name': 'Layer 1',
              viewBox: '0 0 64 64',
            },
            props,
          ),
          react.createElement('path', {
            d: 'M44.54 41.47a23 23 0 0 1-20.05-29.74A1 1 0 0 0 23 10.59 23 23 0 1 0 54.41 42a1 1 0 0 0-1.14-1.47 23.06 23.06 0 0 1-8.73.94Z',
            style: { fill: '#1c1c1c' },
          }),
        );
      };
      var Button = __webpack_require__('./src/shared/ui/Button/Button.tsx'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        ThemeSwitcher = function ThemeSwitcher() {
          var _useTheme = (0, ThemeProvider.Fg)(),
            theme = _useTheme.theme,
            toggleTheme = _useTheme.toggleTheme;
          return (0, jsx_runtime.jsx)(Button.z, {
            onClick: toggleTheme,
            theme: Button.b.CLEAR,
            children: (0, jsx_runtime.jsx)('div', {
              style: { width: 30, height: 30 },
              children:
                theme === ThemeProvider.Q2.LIGHT
                  ? (0, jsx_runtime.jsx)(dark, {})
                  : (0, jsx_runtime.jsx)(light, {}),
            }),
          });
        };
      ThemeSwitcher.displayName = 'ThemeSwitcher';
      try {
        (ThemeSwitcher.displayName = 'ThemeSwitcher'),
          (ThemeSwitcher.__docgenInfo = {
            description: '',
            displayName: 'ThemeSwitcher',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher'
            ] = {
              docgenInfo: ThemeSwitcher.__docgenInfo,
              name: 'ThemeSwitcher',
              path: 'src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss':
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
          '.src-shared-ui-Button-Button-module__Button--a4nOa{cursor:pointer;color:var(--primary-color)}.src-shared-ui-Button-Button-module__clear--FAEtI{outline:none;border:none;background:none}.src-shared-ui-Button-Button-module__outline--pxBl_{padding:10px 15px;border:2px solid var(--primary-color);background:none}',
          '',
          {
            version: 3,
            sources: ['webpack://./src/shared/ui/Button/Button.module.scss'],
            names: [],
            mappings:
              'AAAA,mDACC,cAAA,CACA,0BAAA,CAOD,kDACC,YAAA,CACA,WAAA,CACA,eAAA,CAGD,oDACC,iBAAA,CACA,qCAAA,CACA,eAAA',
            sourcesContent: [
              '.Button {\n\tcursor: pointer;\n\tcolor: var(--primary-color);\n}\n\n.default {\n\t// empty\n}\n\n.clear {\n\toutline: none;\n\tborder: none;\n\tbackground: none;\n}\n\n.outline {\n\tpadding: 10px 15px;\n\tborder: 2px solid var(--primary-color);\n\tbackground: none;\n}\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            Button: 'src-shared-ui-Button-Button-module__Button--a4nOa',
            clear: 'src-shared-ui-Button-Button-module__clear--FAEtI',
            outline: 'src-shared-ui-Button-Button-module__outline--pxBl_',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss':
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
          '.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__Sidebar--ld5FU{height:calc(100vh - var(--navbar-height));width:300px;background:var(--inverted-bg-color);position:relative;transition:width .3s}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhC{width:80px}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIw{background:var(--bg-color);border-right:var(--inverted-bg-color) 1px solid;position:absolute;height:60px;bottom:0;display:flex;justify-content:center;width:100%}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__LangSwitcher--QZ7gR{margin-left:15px}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss',
            ],
            names: [],
            mappings:
              'AAAA,+DACC,yCAAA,CACA,WAAA,CACA,mCAAA,CACA,iBAAA,CACA,oBAAA,CAGD,iEACC,UAAA,CAGD,iEACC,0BAAA,CACA,+CAAA,CACA,iBAAA,CACA,WAAA,CACA,QAAA,CACA,YAAA,CACA,sBAAA,CACA,UAAA,CAGD,oEACC,gBAAA',
            sourcesContent: [
              '.Sidebar {\n\theight: calc(100vh - var(--navbar-height));\n\twidth: 300px;\n\tbackground: var(--inverted-bg-color);\n\tposition: relative;\n\ttransition: width 0.3s;\n}\n\n.collapsed {\n\twidth: 80px;\n}\n\n.switchers {\n\tbackground: var(--bg-color);\n\tborder-right: var(--inverted-bg-color) 1px solid;\n\tposition: absolute;\n\theight: 60px;\n\tbottom: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n}\n\n.LangSwitcher {\n\tmargin-left: 15px;\n}',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            Sidebar:
              'src-widgets-Sidebar-ui-Sidebar-Sidebar-module__Sidebar--ld5FU',
            collapsed:
              'src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhC',
            switchers:
              'src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIw',
            LangSwitcher:
              'src-widgets-Sidebar-ui-Sidebar-Sidebar-module__LangSwitcher--QZ7gR',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);

/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_TopBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TopBar */ \"./src/components/TopBar.tsx\");\n/* harmony import */ var _components_CategoryHeading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CategoryHeading */ \"./src/components/CategoryHeading.tsx\");\n/* harmony import */ var _components_IconTile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/IconTile */ \"./src/components/IconTile.tsx\");\n/* harmony import */ var _components_IconTileModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/IconTileModal */ \"./src/components/IconTileModal.tsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.module.scss */ \"./src/pages/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/nick/Documents/so/healthicons/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var categories = _ref.categories;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined),\n      modalIcon = _useState[0],\n      setModalIcon = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      query = _useState2[0],\n      setQuery = _useState2[1];\n\n  var iconsToRender = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n    var filteredIcons = [];\n\n    if (!query) {\n      return filteredIcons;\n    }\n\n    var lowerCaseQuery = query.toLowerCase();\n    categories.forEach(function (category) {\n      category.icons.forEach(function (icon) {\n        if (icon.title.toLowerCase().includes(lowerCaseQuery)) {\n          filteredIcons.push(icon);\n        }\n      });\n    });\n    return filteredIcons;\n  }, [query, categories]);\n\n  var container = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Health Icons\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:site_name\",\n        content: \"Health icons\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"Health icons\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:description\",\n        content: \"Free, open source health icons. Use in your next commerical or personal project. Editing is ok. Republishing is ok. No need to give credit.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:url\",\n        content: \"http://healthicons.org/\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:image\",\n        content: \"http://healthicons.org/og_image.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:image:secure_url\",\n        content: \"https://healthicons.org/og_image.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:image:width\",\n        content: \"1280\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:image:height\",\n        content: \"640\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"twitter:card\",\n        content: \"summary_large_image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"twitter:image\",\n        content: \"https://healthicons.org/og_image.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"twitter:site\",\n        content: \"@health_icons\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopBar__WEBPACK_IMPORTED_MODULE_4__.TopBar, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      id: \"main\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().box),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: \"Free, open source health icons\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          children: [\"Free for use in your next commerical or personal project.\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, this), \"Editing is ok. Republishing is ok. No need to give credit.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().filterBox),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().filterBoxInput),\n          placeholder: \"Search for icons...\",\n          onChange: function onChange(e) {\n            return setQuery(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this), categories.map(function (category) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [(!query || category.icons.some(function (icon) {\n            return iconsToRender.includes(icon);\n          })) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CategoryHeading__WEBPACK_IMPORTED_MODULE_5__.CategoryHeading, {\n            children: category.title\n          }, category.title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().iconGrid),\n            children: category.icons.map(function (icon) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_IconTile__WEBPACK_IMPORTED_MODULE_6__.IconTile, {\n                icon: icon,\n                visible: !query || iconsToRender.includes(icon),\n                onClick: function onClick() {\n                  setModalIcon(icon);\n                }\n              }, icon.title, false, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, _this)]\n        }, category.title, true, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, _this);\n      }), modalIcon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_IconTileModal__WEBPACK_IMPORTED_MODULE_7__.IconTileModal, {\n        icon: modalIcon,\n        isOpen: modalIcon !== undefined,\n        onClose: function onClose() {\n          setModalIcon(undefined);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n      children: [\"All icons are licensed under an open source\", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"/about#license\",\n        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().link),\n        children: \"MIT License\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this); // required to apply the aria-hidden attribute when a modal opens\n\n\n  react_modal__WEBPACK_IMPORTED_MODULE_3___default().setAppElement(container);\n  return container;\n}\n\n_s(Home, \"4FgFGmcMkUceMg00dDghYikd7qw=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJjYXRlZ29yaWVzIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJtb2RhbEljb24iLCJzZXRNb2RhbEljb24iLCJxdWVyeSIsInNldFF1ZXJ5IiwiaWNvbnNUb1JlbmRlciIsInVzZU1lbW8iLCJmaWx0ZXJlZEljb25zIiwibG93ZXJDYXNlUXVlcnkiLCJ0b0xvd2VyQ2FzZSIsImZvckVhY2giLCJjYXRlZ29yeSIsImljb25zIiwiaWNvbiIsInRpdGxlIiwiaW5jbHVkZXMiLCJwdXNoIiwiY29udGFpbmVyIiwic3R5bGVzIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwic29tZSIsIlJlYWN0TW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFlLFNBQVNBLElBQVQsT0FBeUM7QUFBQTs7QUFBQTs7QUFBQSxNQUF6QkMsVUFBeUIsUUFBekJBLFVBQXlCOztBQUFBLGtCQUNwQkMsK0NBQVEsQ0FBT0MsU0FBUCxDQURZO0FBQUEsTUFDL0NDLFNBRCtDO0FBQUEsTUFDcENDLFlBRG9DOztBQUFBLG1CQUc1QkgsK0NBQVEsRUFIb0I7QUFBQSxNQUcvQ0ksS0FIK0M7QUFBQSxNQUd4Q0MsUUFId0M7O0FBS3RELE1BQU1DLGFBQWEsR0FBR0MsOENBQU8sQ0FBQyxZQUFNO0FBQ2xDLFFBQU1DLGFBQXFCLEdBQUcsRUFBOUI7O0FBQ0EsUUFBSSxDQUFDSixLQUFMLEVBQVk7QUFDVixhQUFPSSxhQUFQO0FBQ0Q7O0FBQ0QsUUFBTUMsY0FBYyxHQUFHTCxLQUFLLENBQUNNLFdBQU4sRUFBdkI7QUFFQVgsY0FBVSxDQUFDWSxPQUFYLENBQW1CLFVBQUNDLFFBQUQsRUFBYztBQUMvQkEsY0FBUSxDQUFDQyxLQUFULENBQWVGLE9BQWYsQ0FBdUIsVUFBQ0cs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Z0JBQVI7QUFBeUIsaUJBQVMsRUFBRWtCLGdFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQXRCc0QsQ0FrSHREOzs7QUFDQU0sa0VBQUEsQ0FBeUJQLFNBQXpCO0FBRUEsU0FBT0EsU0FBUDtBQUNEOztHQXRIdUJwQixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgeyBUb3BCYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1RvcEJhcic7XG5pbXBvcnQgeyBDYXRlZ29yeUhlYWRpbmcgfSBmcm9tICcuLi9jb21wb25lbnRzL0NhdGVnb3J5SGVhZGluZyc7XG5pbXBvcnQgeyBJY29uVGlsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvSWNvblRpbGUnO1xuaW1wb3J0IHsgSWNvblRpbGVNb2RhbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvSWNvblRpbGVNb2RhbCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzQW5kSWNvbnMsIENhdGVnb3J5LCBJY29uIH0gZnJvbSAnLi4vbGliL2ljb25zJztcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIGNhdGVnb3JpZXM6IENhdGVnb3J5W107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBjYXRlZ29yaWVzIH06IEhvbWVQcm9wcykge1xuICBjb25zdCBbbW9kYWxJY29uLCBzZXRNb2RhbEljb25dID0gdXNlU3RhdGU8SWNvbj4odW5kZWZpbmVkKTtcblxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcblxuICBjb25zdCBpY29uc1RvUmVuZGVyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRJY29uczogSWNvbltdID0gW107XG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgcmV0dXJuIGZpbHRlcmVkSWNvbnM7XG4gICAgfVxuICAgIGNvbnN0IGxvd2VyQ2FzZVF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcblxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgIGNhdGVnb3J5Lmljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgaWYgKGljb24udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlckNhc2VRdWVyeSkpIHtcbiAgICAgICAgICBmaWx0ZXJlZEljb25zLnB1c2goaWNvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZEljb25zO1xuICB9LCBbcXVlcnksIGNhdGVnb3JpZXNdKTtcblxuICBjb25zdCBjb250YWluZXIgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SGVhbHRoIEljb25zPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIkhlYWx0aCBpY29uc1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiSGVhbHRoIGljb25zXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiRnJlZSwgb3BlbiBzb3VyY2UgaGVhbHRoIGljb25zLiBVc2UgaW4geW91ciBuZXh0IGNvbW1lcmljYWwgb3IgcGVyc29uYWwgcHJvamVjdC4gRWRpdGluZyBpcyBvay4gUmVwdWJsaXNoaW5nIGlzIG9rLiBObyBuZWVkIHRvIGdpdmUgY3JlZGl0LlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHA6Ly9oZWFsdGhpY29ucy5vcmcvXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cDovL2hlYWx0aGljb25zLm9yZy9vZ19pbWFnZS5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vaGVhbHRoaWNvbnMub3JnL29nX2ltYWdlLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMTI4MFwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjY0MFwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vaGVhbHRoaWNvbnMub3JnL29nX2ltYWdlLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBoZWFsdGhfaWNvbnNcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8VG9wQmFyIC8+XG4gICAgICA8bWFpbiBpZD1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3h9PlxuICAgICAgICAgIDxoMT5GcmVlLCBvcGVuIHNvdXJjZSBoZWFsdGggaWNvbnM8L2gxPlxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIEZyZWUgZm9yIHVzZSBpbiB5b3VyIG5leHQgY29tbWVyaWNhbCBvciBwZXJzb25hbCBwcm9qZWN0LlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBFZGl0aW5nIGlzIG9rLiBSZXB1Ymxpc2hpbmcgaXMgb2suIE5vIG5lZWQgdG8gZ2l2ZSBjcmVkaXQuXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCb3h9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQm94SW5wdXR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgaWNvbnMuLi5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtjYXRlZ29yeS50aXRsZX0+XG4gICAgICAgICAgICB7KCFxdWVyeSB8fFxuICAgICAgICAgICAgICBjYXRlZ29yeS5pY29ucy5zb21lKChpY29uKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGljb25zVG9SZW5kZXIuaW5jbHVkZXMoaWNvbik7XG4gICAgICAgICAgICAgIH0pKSAmJiAoXG4gICAgICAgICAgICAgIDxDYXRlZ29yeUhlYWRpbmcga2V5PXtjYXRlZ29yeS50aXRsZX0+XG4gICAgICAgICAgICAgICAge2NhdGVnb3J5LnRpdGxlfVxuICAgICAgICAgICAgICA8L0NhdGVnb3J5SGVhZGluZz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25HcmlkfT5cbiAgICAgICAgICAgICAge2NhdGVnb3J5Lmljb25zLm1hcCgoaWNvbikgPT4gKFxuICAgICAgICAgICAgICAgIDxJY29uVGlsZVxuICAgICAgICAgICAgICAgICAga2V5PXtpY29uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgICAgICAgIHZpc2libGU9eyFxdWVyeSB8fCBpY29uc1RvUmVuZGVyLmluY2x1ZGVzKGljb24pfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbEljb24oaWNvbik7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICB7bW9kYWxJY29uICYmIChcbiAgICAgICAgICA8SWNvblRpbGVNb2RhbFxuICAgICAgICAgICAgaWNvbj17bW9kYWxJY29ufVxuICAgICAgICAgICAgaXNPcGVuPXttb2RhbEljb24gIT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TW9kYWxJY29uKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICBBbGwgaWNvbnMgYXJlIGxpY2Vuc2VkIHVuZGVyIGFuIG9wZW4gc291cmNleycgJ31cbiAgICAgICAgPGEgaHJlZj1cIi9hYm91dCNsaWNlbnNlXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XG4gICAgICAgICAgTUlUIExpY2Vuc2VcbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgLy8gcmVxdWlyZWQgdG8gYXBwbHkgdGhlIGFyaWEtaGlkZGVuIGF0dHJpYnV0ZSB3aGVuIGEgbW9kYWwgb3BlbnNcbiAgUmVhY3RNb2RhbC5zZXRBcHBFbGVtZW50KGNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxIb21lUHJvcHM+ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZ2V0Q2F0ZWdvcmllc0FuZEljb25zKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNhdGVnb3JpZXNcbiAgICB9XG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n    };\n    const handleChange = (e)=>{\n        setSearchInput(e.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(searchInput);\n        console.log(\"wmZZXLD5oerX0tVxmbieNa14SF4Msyao\");\n        const getSearch = async ()=>{\n            const result = await fetch(\"http://www.mapquestapi.com/search/v3/prediction?key=wmZZXLD5oerX0tVxmbieNa14SF4Msyao&collection=address&q=Ungargasse 17\").then((res)=>res.json());\n            console.log(result);\n        };\n    }, [\n        searchInput\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Food done right\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dkswa\\\\Desktop\\\\projects\\\\food-done-right\\\\frontend\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dkswa\\\\Desktop\\\\projects\\\\food-done-right\\\\frontend\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dkswa\\\\Desktop\\\\projects\\\\food-done-right\\\\frontend\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dkswa\\\\Desktop\\\\projects\\\\food-done-right\\\\frontend\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dkswa\\\\Desktop\\\\projects\\\\food-done-right\\\\frontend\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().textbox),\n                                placeholder: \"Search Address\",\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dkswa\\\\Desktop\\\\projects\\\\food-done-right\\\\frontend\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 38,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                title: \"Search\",\n                                value: \"Go\",\n                                type: \"submit\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().button)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dkswa\\\\Desktop\\\\projects\\\\food-done-right\\\\frontend\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 39,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dkswa\\\\Desktop\\\\projects\\\\food-done-right\\\\frontend\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dkswa\\\\Desktop\\\\projects\\\\food-done-right\\\\frontend\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dkswa\\\\Desktop\\\\projects\\\\food-done-right\\\\frontend\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"vRu3bK4goVsv2pnKK85aJvgJRBk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDZjtBQUNpQjtBQUU5QixTQUFTSSxPQUFPOztJQUM5QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBO0lBQ3RDLE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUE7SUFDOUMsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUMsTUFBTVcsZUFBZSxPQUFPQyxJQUFNO1FBQ2pDQSxFQUFFQyxjQUFjO0lBQ2pCO0lBRUEsTUFBTUMsZUFBZSxDQUFDRixJQUFNO1FBQzNCSixlQUFlSSxFQUFFRyxNQUFNLENBQUNDLEtBQUs7SUFDOUI7SUFFQWYsZ0RBQVNBLENBQUMsSUFBTTtRQUNmZ0IsUUFBUUMsR0FBRyxDQUFDWDtRQUNaVSxRQUFRQyxHQUFHLENBQUNDLGtDQUFvQztRQUNoRCxNQUFNRyxZQUFZLFVBQVk7WUFDN0IsTUFBTUMsU0FBUyxNQUFNQyxNQUFPLDJIQUMxQkMsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJO1lBQ3RCVixRQUFRQyxHQUFHLENBQUNLO1FBQ2I7SUFDRCxHQUFHO1FBQUNoQjtLQUFZO0lBRWhCLHFCQUNDOzswQkFDQyw4REFBQ0wsa0RBQUlBOztrQ0FDSiw4REFBQzBCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFdkIsOERBQUNDO2dCQUFLQyxXQUFXakMscUVBQVc7O2tDQUMzQiw4REFBQ2tDO3dCQUFLQyxVQUFVM0I7OzBDQUNmLDhEQUFDNEI7Z0NBQU1DLE1BQUs7Z0NBQU9KLFdBQVdqQyx3RUFBYztnQ0FBRXVDLGFBQVk7Z0NBQWlCQyxVQUFVN0I7Ozs7OzswQ0FDckYsOERBQUN5QjtnQ0FBTVgsT0FBTTtnQ0FBU1osT0FBTTtnQ0FBS3dCLE1BQUs7Z0NBQVNKLFdBQVdqQyx1RUFBYTs7Ozs7Ozs7Ozs7O2tDQUV4RSw4REFBQzBDOzs7Ozs7Ozs7Ozs7O0FBSUwsQ0FBQztHQXhDdUJ6QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblx0Y29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoKTtcblx0Y29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZSgpO1xuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuXHRcdHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKTtcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coc2VhcmNoSW5wdXQpO1xuXHRcdGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BUFFVRVNUX0tFWSlcblx0XHRjb25zdCBnZXRTZWFyY2ggPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgaHR0cDovL3d3dy5tYXBxdWVzdGFwaS5jb20vc2VhcmNoL3YzL3ByZWRpY3Rpb24/a2V5PXdtWlpYTEQ1b2VyWDB0VnhtYmllTmExNFNGNE1zeWFvJmNvbGxlY3Rpb249YWRkcmVzcyZxPVVuZ2FyZ2Fzc2UgMTdgKVxuXHRcdFx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdH1cblx0fSwgW3NlYXJjaElucHV0XSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPkZvb2QgZG9uZSByaWdodDwvdGl0bGU+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzLnRleHRib3h9IHBsYWNlaG9sZGVyPVwiU2VhcmNoIEFkZHJlc3NcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuXHRcdFx0XHRcdDxpbnB1dCB0aXRsZT1cIlNlYXJjaFwiIHZhbHVlPVwiR29cIiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSAvPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDxwPjwvcD5cblx0XHRcdDwvbWFpbj5cblx0XHQ8Lz5cblx0KVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsInN0eWxlcyIsIkhvbWUiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NQVBRVUVTVF9LRVkiLCJnZXRTZWFyY2giLCJyZXN1bHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ0ZXh0Ym94IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});
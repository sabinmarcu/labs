webpackHotUpdate(0,{

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(6), React = __webpack_require__(47); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(React); })(); } try { (function () {\n\n\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _react = __webpack_require__(47);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _marked = __webpack_require__(445);\n\nvar _marked2 = _interopRequireDefault(_marked);\n\nvar _checkTypes = __webpack_require__(430);\n\nvar _checkTypes2 = _interopRequireDefault(_checkTypes);\n\nvar _helpersUtil = __webpack_require__(421);\n\nvar _helpersUtil2 = _interopRequireDefault(_helpersUtil);\n\nvar _item = __webpack_require__(477);\n\nvar _item2 = _interopRequireDefault(_item);\n\nexports[\"default\"] = {\n    smallTile: function smallTile(item, children) {\n        var next = arguments.length <= 2 || arguments[2] === undefined ? _react2[\"default\"].createElement(\"span\", null) : arguments[2];\n\n        return _react2[\"default\"].createElement(\n            \"span\",\n            null,\n            _react2[\"default\"].createElement(\n                \"header\",\n                { className: this.styles.header },\n                _checkTypes2[\"default\"].string(children[item]) ? children[item] : item\n            ),\n            _react2[\"default\"].createElement(\n                \"section\",\n                { className: this.styles.smallcontent },\n                next\n            )\n        );\n    },\n    bigTile: function bigTile(item, children) {\n        return _react2[\"default\"].createElement(\n            \"h1\",\n            null,\n            \" TBD \"\n        );\n    },\n    fileLayout: function fileLayout(item, children) {\n        return _react2[\"default\"].createElement(\n            \"li\",\n            { className: this.styles.item + \" \" + this.styles.file + \" \" + this.activeClass(item) },\n            _react2[\"default\"].createElement(\n                \"a\",\n                { href: _helpersUtil2[\"default\"].suffixSlash(window.location) + item },\n                this.views.smallTile(item, children, _react2[\"default\"].createElement(\n                    \"h1\",\n                    { className: this.styles.hint },\n                    \"Click here to open\"\n                ))\n            )\n        );\n    },\n    folderLayout: function folderLayout(item, children) {\n        return _react2[\"default\"].createElement(\n            \"li\",\n            { className: this.styles.item + \" \" + this.activeClass(item) },\n            this.views.smallTile(item, children)\n        );\n    },\n    render: function render() {\n        var _this = this;\n\n        return _react2[\"default\"].createElement(\n            \"ul\",\n            { className: this.styles.list },\n            this.props.items && Object.keys(this.props.items).length > 0 && Object.keys(this.props.items).map(function (item) {\n                return _react2[\"default\"].createElement(_item2[\"default\"], { file: item, content: _this.props.items });\n            })\n        );\n    }\n};\nmodule.exports = exports[\"default\"];\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(425); if (makeExportsHot(module, __webpack_require__(47))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"view.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/app/components/ItemsList/view.jsx\n ** module id = 444\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/app/components/ItemsList/view.jsx?");

/***/ }

})
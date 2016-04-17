var Foo =
webpackJsonpFoo([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);


/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (n) {
	  return n + " hello 你好";
	};

	var _dommon = __webpack_require__(11);

	var _dommon2 = _interopRequireDefault(_dommon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import ramda from 'ramda'

	(0, _dommon2.default)(); /**
	                          * Created by blake on 4/17/16.
	                          */

/***/ },

/***/ 11:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by blake on 4/17/16.
	 */

	exports.default = function () {
	  console.log('i am common!');
	};

/***/ }

});
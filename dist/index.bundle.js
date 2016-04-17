var Foo =
webpackJsonpFoo([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(is) {/**
	 * Created by blake on 4/17/16.
	 */
	'use strict';
	//import cm from './dommon'

	var _ramda = __webpack_require__(2);

	var _ramda2 = _interopRequireDefault(_ramda);

	var _$ = __webpack_require__(3);

	var _$2 = _interopRequireDefault(_$);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(4);

	console.log(_$2.default);
	console.log(is);
	var Foo = function Foo() {
	    console.log("FOOL");
	    console.log(is);
	    //console.log(moment)
	    __webpack_require__.e/* nsure */(2, function (require) {
	        var X = __webpack_require__(9);
	        console.log(X);
	    });
	};

	if (true) {
	    console.log("XXXX");
	} else {
	    console.log("TTTTT");
	}
	console.log("__X___:" + (true));

	var x = "hello world hot replacement!!!!";

	var log = function log(x) {
	    console.log(x);
	};

	log(x);

	module.exports = Foo;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {// is.js 0.8.0
	// Author: Aras Atasaygin

	// AMD with global, Node, or global
	;(function(root, factory) {
	    if(true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	            // Also create a global in case some scripts
	            // that are loaded still are looking for
	            // a global even when an AMD loader is in use.
	            return (root.is = factory());
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if(typeof exports === 'object') {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like enviroments that support module.exports,
	        // like Node.
	        module.exports = factory();
	    } else {
	        // Browser globals (root is window)
	        root.is = factory();
	    }
	} (this, function() {

	    // Baseline
	    /* -------------------------------------------------------------------------- */

	    var root = this || global;
	    var previousIs = root.is;

	    // define 'is' object and current version
	    var is = {};
	    is.VERSION = '0.8.0';

	    // define interfaces
	    is.not = {};
	    is.all = {};
	    is.any = {};

	    // cache some methods to call later on
	    var toString = Object.prototype.toString;
	    var arraySlice = Array.prototype.slice;
	    var hasOwnProperty = Object.prototype.hasOwnProperty;

	    // helper function which reverses the sense of predicate result
	    function not(func) {
	        return function() {
	            return !func.apply(null, arraySlice.call(arguments));
	        };
	    }

	    // helper function which call predicate function per parameter and return true if all pass
	    function all(func) {
	        return function() {
	            var parameters = arraySlice.call(arguments);
	            var length = parameters.length;
	            if(length === 1 && is.array(parameters[0])) {    // support array
	                parameters = parameters[0];
	                length = parameters.length;
	            }
	            for (var i = 0; i < length; i++) {
	                if (!func.call(null, parameters[i])) {
	                    return false;
	                }
	            }
	            return true;
	        };
	    }

	    // helper function which call predicate function per parameter and return true if any pass
	    function any(func) {
	        return function() {
	            var parameters = arraySlice.call(arguments);
	            var length = parameters.length;
	            if(length === 1 && is.array(parameters[0])) {    // support array
	                parameters = parameters[0];
	                length = parameters.length;
	            }
	            for (var i = 0; i < length; i++) {
	                if (func.call(null, parameters[i])) {
	                    return true;
	                }
	            }
	            return false;
	        };
	    }

	    // Type checks
	    /* -------------------------------------------------------------------------- */

	    // is a given value Arguments?
	    is.arguments = function(value) {    // fallback check is for IE
	        return is.not.null(value) && (toString.call(value) === '[object Arguments]' || (typeof value === 'object' && 'callee' in value));
	    };

	    // is a given value Array?
	    is.array = Array.isArray || function(value) {    // check native isArray first
	        return toString.call(value) === '[object Array]';
	    };

	    // is a given value Boolean?
	    is.boolean = function(value) {
	        return value === true || value === false || toString.call(value) === '[object Boolean]';
	    };

	    // is a given value Date Object?
	    is.date = function(value) {
	        return toString.call(value) === '[object Date]';
	    };

	    // is a given value Error object?
	    is.error = function(value) {
	        return toString.call(value) === '[object Error]';
	    };

	    // is a given value function?
	    is.function = function(value) {    // fallback check is for IE
	        return toString.call(value) === '[object Function]' || typeof value === 'function';
	    };

	    // is a given value NaN?
	    is.nan = function(value) {    // NaN is number :) Also it is the only value which does not equal itself
	        return value !== value;
	    };

	    // is a given value null?
	    is.null = function(value) {
	        return value === null;
	    };

	    // is a given value number?
	    is.number = function(value) {
	        return is.not.nan(value) && toString.call(value) === '[object Number]';
	    };

	    // is a given value object?
	    is.object = function(value) {
	        var type = typeof value;
	        return type === 'function' || type === 'object' && !!value;
	    };

	    // is given value a pure JSON object?
	    is.json = function(value) {
	        return toString.call(value) === '[object Object]';
	    };

	    // is a given value RegExp?
	    is.regexp = function(value) {
	        return toString.call(value) === '[object RegExp]';
	    };

	    // are given values same type?
	    // prevent NaN, Number same type check
	    is.sameType = function(value1, value2) {
	        if(is.nan(value1) || is.nan(value2)) {
	            return is.nan(value1) === is.nan(value2);
	        }
	        return toString.call(value1) === toString.call(value2);
	    };
	    // sameType method does not support 'all' and 'any' interfaces
	    is.sameType.api = ['not'];

	    // is a given value String?
	    is.string = function(value) {
	        return toString.call(value) === '[object String]';
	    };

	    // is a given value Char?
	    is.char = function(value) {
	        return is.string(value) && value.length === 1;
	    };

	    // is a given value undefined?
	    is.undefined = function(value) {
	        return value === void 0;
	    };

	    // Presence checks
	    /* -------------------------------------------------------------------------- */

	    //is a given value empty? Objects, arrays, strings
	    is.empty = function(value) {
	        if(is.object(value)){
	            var num = Object.getOwnPropertyNames(value).length;
	            if(num === 0 || (num === 1 && is.array(value)) || (num === 2 && is.arguments(value))){
	                return true;
	            }
	            return false;
	        } else {
	            return value === '';
	        }
	    };

	    // is a given value existy?
	    is.existy = function(value) {
	        return value !== null && value !== undefined;
	    };

	    // is a given value truthy?
	    is.truthy = function(value) {
	        return is.existy(value) && value !== false && is.not.nan(value) && value !== "" && value !== 0;
	    };

	    // is a given value falsy?
	    is.falsy = not(is.truthy);

	    // is a given value space?
	    // horizantal tab: 9, line feed: 10, vertical tab: 11, form feed: 12, carriage return: 13, space: 32
	    is.space =  function(value) {
	        if(is.char(value)) {
	            var characterCode = value.charCodeAt(0);
	            return (characterCode >  8 && characterCode < 14) || characterCode === 32;
	        } else {
	            return false;
	        }
	    };

	    // Arithmetic checks
	    /* -------------------------------------------------------------------------- */

	    // are given values equal? supports numbers, strings, regexps, booleans
	    // TODO: Add object and array support
	    is.equal = function(value1, value2) {
	        // check 0 and -0 equity with Infinity and -Infinity
	        if(is.all.number(value1, value2)) {
	            return value1 === value2 && 1 / value1 === 1 / value2;
	        }
	        // check regexps as strings too
	        if(is.all.string(value1, value2) || is.all.regexp(value1, value2)) {
	            return '' + value1 === '' + value2;
	        }
	        if(is.all.boolean(value1, value2)) {
	            return value1 === value2;
	        }
	        return false;
	    };
	    // equal method does not support 'all' and 'any' interfaces
	    is.equal.api = ['not'];

	    // is a given number even?
	    is.even = function(numb) {
	        return is.number(numb) && numb % 2 === 0;
	    };

	    // is a given number odd?
	    is.odd = function(numb) {
	        return is.number(numb) && numb % 2 === 1;
	    };

	    // is a given number positive?
	    is.positive = function(numb) {
	        return is.number(numb) && numb > 0;
	    };

	    // is a given number negative?
	    is.negative = function(numb) {
	        return is.number(numb) && numb < 0;
	    };

	    // is a given number above minimum parameter?
	    is.above = function(numb, min) {
	        return is.all.number(numb, min) && numb > min;
	    };
	    // above method does not support 'all' and 'any' interfaces
	    is.above.api = ['not'];

	    // is a given number above maximum parameter?
	    is.under = function(numb, max) {
	        return is.all.number(numb, max) && numb < max;
	    };
	    // least method does not support 'all' and 'any' interfaces
	    is.under.api = ['not'];

	    // is a given number within minimum and maximum parameters?
	    is.within = function(numb, min, max) {
	        return is.all.number(numb, min, max) && numb > min && numb < max;
	    };
	    // within method does not support 'all' and 'any' interfaces
	    is.within.api = ['not'];

	    // is a given number decimal?
	    is.decimal = function(numb) {
	        return is.number(numb) && numb % 1 !== 0;
	    };

	    // is a given number integer?
	    is.integer = function(numb) {
	        return is.number(numb) && numb % 1 === 0;
	    };

	    // is a given number finite?
	    is.finite = isFinite || function(numb) {
	        return numb !== Infinity && numb !== -Infinity && is.not.nan(numb);
	    };

	    // is a given number infinite?
	    is.infinite = not(is.finite);

	    // Regexp checks
	    /* -------------------------------------------------------------------------- */
	    // Steven Levithan, Jan Goyvaerts: Regular Expressions Cookbook
	    // Scott Gonzalez: Email address validation

	    // eppPhone match extensible provisioning protocol format
	    // nanpPhone match north american number plan format
	    // dateString match m/d/yy and mm/dd/yyyy, allowing any combination of one or two digits for the day and month, and two or four digits for the year
	    // time match hours, minutes, and seconds, 24-hour clock
	    var regexps = {
	        url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
	        email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
	        creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
	        alphaNumeric: /^[A-Za-z0-9]+$/,
	        timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
	        dateString: /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/,
	        usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/,
	        caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
	        ukPostCode: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
	        nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
	        eppPhone: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
	        socialSecurityNumber: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
	        affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
	        hexadecimal: /^[0-9a-fA-F]+$/,
	        hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
	        ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
	        ipv6: /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
	        ip: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
	    };

	    // create regexp checks methods from 'regexp' object
	    for(var regexp in regexps) {
	        if(regexps.hasOwnProperty(regexp)) {
	            regexpCheck(regexp, regexps);
	        }
	    }

	    function regexpCheck(regexp, regexps) {
	        is[regexp] = function(value) {
	            return regexps[regexp].test(value);
	        };
	    }

	    // String checks
	    /* -------------------------------------------------------------------------- */

	    // is a given string include parameter substring?
	    is.include = function(str, substr) {
	        return str.indexOf(substr) > -1;
	    };
	    // include method does not support 'all' and 'any' interfaces
	    is.include.api = ['not'];

	    // is a given string all uppercase?
	    is.upperCase = function(str) {
	        return is.string(str) && str === str.toUpperCase();
	    };

	    // is a given string all lowercase?
	    is.lowerCase = function(str) {
	        return is.string(str) && str === str.toLowerCase();
	    };

	    // is string start with a given startWith parameter?
	    is.startWith = function(str, startWith) {
	        return is.string(str) && str.indexOf(startWith) === 0;
	    };
	    // startWith method does not support 'all' and 'any' interfaces
	    is.startWith.api = ['not'];

	    // is string end with a given endWith parameter?
	    is.endWith = function(str, endWith) {
	        return is.string(str) && str.indexOf(endWith) > -1 && str.indexOf(endWith) === str.length -  endWith.length;
	    };
	    // endWith method does not support 'all' and 'any' interfaces
	    is.endWith.api = ['not'];

	    // is a given string or sentence capitalized?
	    is.capitalized = function(str) {
	        if(is.not.string(str)) {
	            return false;
	        }
	        var words = str.split(' ');
	        var capitalized = [];
	        for(var i = 0; i < words.length; i++) {
	            capitalized.push(words[i][0] === words[i][0].toUpperCase());
	        }
	        return is.all.truthy.apply(null, capitalized);
	    };

	    // is a given string palindrome?
	    is.palindrome = function(str) {
	        return is.string(str) && str == str.split('').reverse().join('');
	    };

	    // Time checks
	    /* -------------------------------------------------------------------------- */

	    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
	    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

	    // is a given date indicate today?
	    is.today = function(obj) {
	        var now = new Date();
	        var todayString = now.toDateString();
	        return is.date(obj) && obj.toDateString() === todayString;
	    };

	    // is a given date indicate yesterday?
	    is.yesterday = function(obj) {
	        var now = new Date();
	        var yesterdayString = new Date(now.setDate(now.getDate() - 1)).toDateString();
	        return is.date(obj) && obj.toDateString() === yesterdayString;
	    };

	    // is a given date indicate tomorrow?
	    is.tomorrow = function(obj) {
	        var now = new Date();
	        var tomorrowString = new Date(now.setDate(now.getDate() + 1)).toDateString();
	        return is.date(obj) && obj.toDateString() === tomorrowString;
	    };

	    // is a given date past?
	    is.past = function(obj) {
	        var now = new Date();
	        return is.date(obj) && obj.getTime() < now.getTime();
	    };

	    // is a given date future?
	    is.future = not(is.past);

	    // is a given dates day equal given dayString parameter?
	    is.day = function(obj, dayString) {
	        return is.date(obj) && dayString.toLowerCase() === days[obj.getDay()];
	    };
	    // day method does not support 'all' and 'any' interfaces
	    is.day.api = ['not'];

	    // is a given dates month equal given monthString parameter?
	    is.month = function(obj, monthString) {
	        return is.date(obj) && monthString.toLowerCase() === months[obj.getMonth()];
	    };
	    // month method does not support 'all' and 'any' interfaces
	    is.month.api = ['not'];

	    // is a given dates year equal given year parameter?
	    is.year = function(obj, year) {
	        return is.date(obj) && is.number(year) && year === obj.getFullYear();
	    };
	    // year method does not support 'all' and 'any' interfaces
	    is.year.api = ['not'];

	    // is the given year a leap year?
	    is.leapYear = function(year) {
	        return is.number(year) && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
	    };

	    // is a given date weekend?
	    // 6: Saturday, 0: Sunday
	    is.weekend = function(obj) {
	        return is.date(obj) && (obj.getDay() === 6 || obj.getDay() === 0);
	    };

	    // is a given date weekday?
	    is.weekday = not(is.weekend);

	    // is date within given range?
	    is.inDateRange = function(obj, startObj, endObj) {
	        if(is.not.date(obj) || is.not.date(startObj) || is.not.date(endObj)) {
	            return false;
	        }
	        var givenDate = obj.getTime();
	        var start = startObj.getTime();
	        var end = endObj.getTime();
	        return givenDate > start && givenDate < end;
	    };
	    // inDateRange method does not support 'all' and 'any' interfaces
	    is.inDateRange.api = ['not'];

	    // is a given date in last week range?
	    is.inLastWeek = function(obj) {
	        return is.inDateRange(obj, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
	    };

	    // is a given date in last month range?
	    is.inLastMonth = function(obj) {
	        return is.inDateRange(obj, new Date(new Date().setMonth(new Date().getMonth() - 1)), new Date());
	    };

	    // is a given date in last year range?
	    is.inLastYear = function(obj) {
	        return is.inDateRange(obj, new Date(new Date().setFullYear(new Date().getFullYear() - 1)), new Date());
	    };

	    // is a given date in next week range?
	    is.inNextWeek = function(obj) {
	        return is.inDateRange(obj, new Date(), new Date(new Date().setDate(new Date().getDate() + 7)));
	    };

	    // is a given date in next month range?
	    is.inNextMonth = function(obj) {
	        return is.inDateRange(obj, new Date(), new Date(new Date().setMonth(new Date().getMonth() + 1)));
	    };

	    // is a given date in next year range?
	    is.inNextYear = function(obj) {
	        return is.inDateRange(obj, new Date(), new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
	    };

	    // is a given date in the parameter quarter?
	    is.quarterOfYear = function(obj, quarterNumber) {
	        return is.date(obj) && is.number(quarterNumber) && quarterNumber === Math.floor((obj.getMonth() + 3) / 3);
	    };
	    // quarterOfYear method does not support 'all' and 'any' interfaces
	    is.quarterOfYear.api = ['not'];

	    // is a given date in daylight saving time?
	    is.dayLightSavingTime = function(obj) {
	        var january = new Date(obj.getFullYear(), 0, 1);
	        var july = new Date(obj.getFullYear(), 6, 1);
	        var stdTimezoneOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
	        return obj.getTimezoneOffset() < stdTimezoneOffset;
	    };

	    // Environment checks
	    /* -------------------------------------------------------------------------- */

	    // check if library is used as a Node.js module
	    if(typeof window !== 'undefined') {

	        // store navigator properties to use later
	        var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
	        var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
	        var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

	        // is current browser chrome?
	        is.chrome = function() {
	            return /chrome|chromium/i.test(userAgent) && /google inc/.test(vendor);
	        };
	        // chrome method does not support 'all' and 'any' interfaces
	        is.chrome.api = ['not'];

	        // is current browser firefox?
	        is.firefox = function() {
	            return /firefox/i.test(userAgent);
	        };
	        // firefox method does not support 'all' and 'any' interfaces
	        is.firefox.api = ['not'];

	        // is current browser edge?
	        is.edge = function() {
	            return /edge/i.test(userAgent);
	        };
	        // edge method does not support 'all' and 'any' interfaces
	        is.edge.api = ['not'];

	        // is current browser internet explorer?
	        // parameter is optional
	        is.ie = function(version) {
	            if(!version) {
	                return /msie/i.test(userAgent) || "ActiveXObject" in window;
	            }
	            if(version >= 11) {
	                return "ActiveXObject" in window;
	            }
	            return new RegExp('msie ' + version).test(userAgent);
	        };
	        // ie method does not support 'all' and 'any' interfaces
	        is.ie.api = ['not'];

	        // is current browser opera?
	        is.opera = function() {
	            return /^Opera\//.test(userAgent) || // Opera 12 and older versions
	                /\x20OPR\//.test(userAgent); // Opera 15+
	        };
	        // opera method does not support 'all' and 'any' interfaces
	        is.opera.api = ['not'];

	        // is current browser safari?
	        is.safari = function() {
	            return /safari/i.test(userAgent) && /apple computer/i.test(vendor);
	        };
	        // safari method does not support 'all' and 'any' interfaces
	        is.safari.api = ['not'];

	        // is current device ios?
	        is.ios = function() {
	            return is.iphone() || is.ipad() || is.ipod();
	        };
	        // ios method does not support 'all' and 'any' interfaces
	        is.ios.api = ['not'];

	        // is current device iphone?
	        is.iphone = function() {
	            return /iphone/i.test(userAgent);
	        };
	        // iphone method does not support 'all' and 'any' interfaces
	        is.iphone.api = ['not'];

	        // is current device ipad?
	        is.ipad = function() {
	            return /ipad/i.test(userAgent);
	        };
	        // ipad method does not support 'all' and 'any' interfaces
	        is.ipad.api = ['not'];

	        // is current device ipod?
	        is.ipod = function() {
	            return /ipod/i.test(userAgent);
	        };
	        // ipod method does not support 'all' and 'any' interfaces
	        is.ipod.api = ['not'];

	        // is current device android?
	        is.android = function() {
	            return /android/i.test(userAgent);
	        };
	        // android method does not support 'all' and 'any' interfaces
	        is.android.api = ['not'];

	        // is current device android phone?
	        is.androidPhone = function() {
	            return /android/i.test(userAgent) && /mobile/i.test(userAgent);
	        };
	        // androidPhone method does not support 'all' and 'any' interfaces
	        is.androidPhone.api = ['not'];

	        // is current device android tablet?
	        is.androidTablet = function() {
	            return /android/i.test(userAgent) && !/mobile/i.test(userAgent);
	        };
	        // androidTablet method does not support 'all' and 'any' interfaces
	        is.androidTablet.api = ['not'];

	        // is current device blackberry?
	        is.blackberry = function() {
	            return /blackberry/i.test(userAgent) || /BB10/i.test(userAgent);
	        };
	        // blackberry method does not support 'all' and 'any' interfaces
	        is.blackberry.api = ['not'];

	        // is current device desktop?
	        is.desktop = function() {
	            return is.not.mobile() && is.not.tablet();
	        };
	        // desktop method does not support 'all' and 'any' interfaces
	        is.desktop.api = ['not'];

	        // is current operating system linux?
	        is.linux = function() {
	            return /linux/i.test(appVersion);
	        };
	        // linux method does not support 'all' and 'any' interfaces
	        is.linux.api = ['not'];

	        // is current operating system mac?
	        is.mac = function() {
	            return /mac/i.test(appVersion);
	        };
	        // mac method does not support 'all' and 'any' interfaces
	        is.mac.api = ['not'];

	        // is current operating system windows?
	        is.windows = function() {
	            return /win/i.test(appVersion);
	        };
	        // windows method does not support 'all' and 'any' interfaces
	        is.windows.api = ['not'];

	        // is current device windows phone?
	        is.windowsPhone = function() {
	            return is.windows() && /phone/i.test(userAgent);
	        };
	        // windowsPhone method does not support 'all' and 'any' interfaces
	        is.windowsPhone.api = ['not'];

	        // is current device windows tablet?
	        is.windowsTablet = function() {
	            return is.windows() && is.not.windowsPhone() && /touch/i.test(userAgent);
	        };
	        // windowsTablet method does not support 'all' and 'any' interfaces
	        is.windowsTablet.api = ['not'];

	        // is current device mobile?
	        is.mobile = function() {
	            return is.iphone() || is.ipod() || is.androidPhone() || is.blackberry() || is.windowsPhone();
	        };
	        // mobile method does not support 'all' and 'any' interfaces
	        is.mobile.api = ['not'];

	        // is current device tablet?
	        is.tablet = function() {
	            return is.ipad() || is.androidTablet() || is.windowsTablet();
	        };
	        // tablet method does not support 'all' and 'any' interfaces
	        is.tablet.api = ['not'];

	        // is current state online?
	        is.online = function() {
	            return navigator.onLine;
	        };
	        // online method does not support 'all' and 'any' interfaces
	        is.online.api = ['not'];

	        // is current state offline?
	        is.offline = not(is.online);
	        // offline method does not support 'all' and 'any' interfaces
	        is.offline.api = ['not'];

	        // is current device supports touch?
	        is.touchDevice = function() {
	            return 'ontouchstart' in window ||'DocumentTouch' in window && document instanceof DocumentTouch;
	        };
	        // touchDevice method does not support 'all' and 'any' interfaces
	        is.touchDevice.api = ['not'];
	    }

	    // Object checks
	    /* -------------------------------------------------------------------------- */

	    // has a given object got parameterized count property?
	    is.propertyCount = function(obj, count) {
	        if(!is.object(obj) || !is.number(count)) {
	            return false;
	        }
	        if(Object.keys) {
	            return Object.keys(obj).length === count;
	        }
	        var properties = [],
	            property;
	        for(property in obj) {
	            if (hasOwnProperty.call(obj, property)) {
	                properties.push(property);
	            }
	        }
	        return properties.length === count;
	    };
	    // propertyCount method does not support 'all' and 'any' interfaces
	    is.propertyCount.api = ['not'];

	    // is given object has parameterized property?
	    is.propertyDefined = function(obj, property) {
	        return is.object(obj) && is.string(property) && property in obj;
	    };
	    // propertyDefined method does not support 'all' and 'any' interfaces
	    is.propertyDefined.api = ['not'];

	    // is a given object window?
	    // setInterval method is only available for window object
	    is.windowObject = function(obj) {
	        return typeof obj === 'object' && 'setInterval' in obj;
	    };

	    // is a given object a DOM node?
	    is.domNode = function(obj) {
	        return is.object(obj) && obj.nodeType > 0;
	    };

	    // Array checks
	    /* -------------------------------------------------------------------------- */

	    // is a given item in an array?
	    is.inArray = function(val, arr){
	        if(is.not.array(arr)) {
	            return false;
	        }
	        for(var i = 0; i < arr.length; i++) {
	            if (arr[i] === val) return true;
	        }
	        return false;
	    };
	    // inArray method does not support 'all' and 'any' interfaces
	    is.inArray.api = ['not'];

	    // is a given array sorted?
	    is.sorted = function(arr) {
	        if(is.not.array(arr)) {
	            return false;
	        }
	        for(var i = 0; i < arr.length; i++) {
	            if(arr[i] > arr[i + 1]) return false;
	        }
	        return true;
	    };

	    // API
	    // Set 'not', 'all' and 'any' interfaces to methods based on their api property
	    /* -------------------------------------------------------------------------- */

	    function setInterfaces() {
	        var options = is;
	        for(var option in options) {
	            if(hasOwnProperty.call(options, option) && is.function(options[option])) {
	                var interfaces = options[option].api || ['not', 'all', 'any'];
	                for (var i = 0; i < interfaces.length; i++) {
	                    if(interfaces[i] === 'not') {
	                        is.not[option] = not(is[option]);
	                    }
	                    if(interfaces[i] === 'all') {
	                        is.all[option] = all(is[option]);
	                    }
	                    if(interfaces[i] === 'any') {
	                        is.any[option] = any(is[option]);
	                    }
	                }
	            }
	        }
	    }
	    setInterfaces();

	    // Configuration methods
	    // Intentionally added after setInterfaces function
	    /* -------------------------------------------------------------------------- */

	    // set optional regexps to methods if you think they suck
	    is.setRegexp = function(regexp, regexpName) {
	        for(var r in regexps) {
	            if(hasOwnProperty.call(regexps, r) && (regexpName === r)) {
	                regexps[r] = regexp;
	            }
	        }
	    };

	    // change namespace of library to prevent name collisions
	    // var preferredName = is.setNamespace();
	    // preferredName.odd(3);
	    // => true
	    is.setNamespace = function() {
	        root.is = previousIs;
	        return this;
	    };

	    return is;
	}));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	module.exports = $;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".div {\n    height: 300px;\n    width: 300px;\n    position: relative;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    background: url(" + __webpack_require__(7) + ");\n}", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/testae79e9b8.png";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
]);
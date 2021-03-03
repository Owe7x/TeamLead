/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 1');\r\n$('.single-item').slick();\r\n$(\"#phone\").mask(\"+7(999) 999-9999\")\r\n\r\n$('#btn-scroll').click(function () {\r\n    var scrollTop = $('#form1').offset().top;\r\n    $(document).scrollTop(scrollTop);\r\n});\r\n$('#form1').validate({\r\n    rules: {\r\n      fname: 'required',\r\n      user_email: {\r\n        required: true,\r\n        email: true,\r\n      },\r\n      phone: {\r\n       required: true,\r\n       minlength: 10,\r\n   },\r\n    },\r\n    messages: {\r\n      fname: 'Это поле является обязательным',\r\n      user_email: 'Это поле является обязательным',\r\n      phone: 'Это поле является обязательным'\r\n    },\r\n    submitHandler: function(form) {\r\n      form.submit();\r\n    }\r\n  });\r\n$(function() {\r\n\t\r\n    var target_block = $(\".price\"); // Ищем блок \r\n    var blockStatus = true;\r\n    \r\n    $(window).scroll(function() {\r\n    \r\n        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));\r\n        \r\n        if(scrollEvent && blockStatus) {\r\n        \r\n            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.\r\n            \r\n            $({numberValue: 0}).animate({numberValue: 1000}, {\r\n            \r\n                duration: 4000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд \r\n                easing: \"linear\",\r\n                \r\n                step: function(val) {\r\n                \r\n                    $(\".price\").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию\r\n                    \r\n                }\r\n                \r\n            });\r\n            \r\n        }\r\n        \r\n    });\r\n    \r\n});\r\n\r\nfunction CountdownTimer(elm,tl,mes){\r\n    this.initialize.apply(this,arguments);\r\n   }\r\n   CountdownTimer.prototype={\r\n    initialize:function(elm,tl,mes) {\r\n     this.elem = document.getElementById(elm);\r\n     this.tl = tl;\r\n     this.mes = mes;\r\n    },countDown:function(){\r\n     var timer='';\r\n     var today=new Date();\r\n     var day=Math.floor((this.tl-today)/(24*60*60*1000));\r\n     var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));\r\n     var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;\r\n     var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;\r\n     var me=this;\r\n   \r\n     if( ( this.tl - today ) > 0 ){\r\n      timer += '<span class=\"number-wrapper\"><div class=\"line\"></div><div class=\"caption\">DAYS</div><span class=\"number day\">'+day+'</span></span>';\r\n      timer += '<span class=\"number-wrapper\"><div class=\"line\"></div><div class=\"caption\">HOURS</div><span class=\"number hour\">'+hour+'</span></span>';\r\n      timer += '<span class=\"number-wrapper\"><div class=\"line\"></div><div class=\"caption\">MINS</div><span class=\"number min\">'+this.addZero(min)+'</span></span><span class=\"number-wrapper\"><div class=\"line\"></div><div class=\"caption\">SECS</div><span class=\"number sec\">'+this.addZero(sec)+'</span></span>';\r\n      this.elem.innerHTML = timer;\r\n      tid = setTimeout( function(){me.countDown();},10 );\r\n     }else{\r\n      this.elem.innerHTML = this.mes;\r\n      return;\r\n     }\r\n    },addZero:function(num){ return ('0'+num).slice(-2); }\r\n   }\r\n   function CDT(){\r\n   \r\n    // Set countdown limit\r\n    var tl = new Date('2021/03/08 00:00:00');\r\n   \r\n    // You can add time's up message here\r\n    var timer = new CountdownTimer('CDT',tl,'<span class=\"number-wrapper\"><div class=\"line\"></div><span class=\"number end\">Time is up!</span></span>');\r\n    timer.countDown();\r\n   }\r\n   window.onload=function(){\r\n    CDT();\r\n   }\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\д\\Desktop\\Frontend\\TeamLead\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\д\\Desktop\\Frontend\\TeamLead\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });
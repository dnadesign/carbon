(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.cssPlexCoreTest = mod.exports;
  }
})(this, function () {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
  /**
   * Copyright IBM Corp. 2015, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @jest-environment node
   */


  var _require = require('@carbon/test-utils/scss'),
      convert = _require.convert,
      createSassRenderer = _require.createSassRenderer;

  var variables = ['font-path', 'unicodes', 'families', 'fallbacks', 'weights'];
  var render = createSassRenderer(__dirname);

  var renderClassic = function renderClassic(content) {
    return render("\n$css--reset: false;\n$feature-flags: (components-x: false, breaking-changes-x: false);\n".concat(content, "\n"));
  };

  var isClassic =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _ref2, calls;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return render("\n@import '../../scss/functions';\n$t: test(feature-flag-enabled('breaking-changes-x'));\n");

            case 2:
              _ref2 = _context.sent;
              calls = _ref2.calls;
              return _context.abrupt("return", !convert(calls[0][0]));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function isClassic() {
      return _ref.apply(this, arguments);
    };
  }();

  describe('_css--plex-core', function () {
    it.each(variables)('should export the variable $%s',
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(name) {
        var _ref4, calls;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return renderClassic("\n@import '../css--plex-core';\n\n$c: test(global-variable-exists(".concat(name, "));\n$value: test($").concat(name, ");\n"));

              case 2:
                _ref4 = _context2.sent;
                calls = _ref4.calls; // Check that global-variable-exists returned true

                expect(calls[0][0].getValue()).toBe(true);
                expect(convert(calls[1][0])).toMatchSnapshot();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());
    describe('check-default-font-path', function () {
      it('should warn if the default $font-path uses unpkg',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var _ref6, output;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return renderClassic("\n@import '../css--plex-core';\n\n@include check-default-font-path() {\n  $test: true;\n};\n");

              case 2:
                _ref6 = _context3.sent;
                output = _ref6.output;
                _context3.t0 = expect(output.warn);
                _context3.next = 7;
                return isClassic();

              case 7:
                if (!_context3.sent) {
                  _context3.next = 11;
                  break;
                }

                _context3.t1 = 1;
                _context3.next = 12;
                break;

              case 11:
                _context3.t1 = 2;

              case 12:
                _context3.t2 = _context3.t1;

                _context3.t0.toHaveBeenCalledTimes.call(_context3.t0, _context3.t2);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      })));
      it('should not warn if $font-path is set and does not contain unpkg',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var _ref8, output;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return renderClassic("\n$font-path: 'https://my-custom-cdn.com';\n@import '../css--plex-core';\n\n@include check-default-font-path() {\n  $test: true;\n};\n");

              case 2:
                _ref8 = _context4.sent;
                output = _ref8.output;
                _context4.t0 = expect(output.warn);
                _context4.next = 7;
                return isClassic();

              case 7:
                if (!_context4.sent) {
                  _context4.next = 11;
                  break;
                }

                _context4.t1 = 0;
                _context4.next = 12;
                break;

              case 11:
                _context4.t1 = 1;

              case 12:
                _context4.t2 = _context4.t1;

                _context4.t0.toHaveBeenCalledTimes.call(_context4.t0, _context4.t2);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      })));
    });
    describe('plex-font-face', function () {
      it('should output @font-face files based on families, weights, and unicodes',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        var _ref10, result;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return renderClassic("\n@import '../css--plex-core';\n\n@include plex-font-face();\n");

              case 2:
                _ref10 = _context5.sent;
                result = _ref10.result;
                expect(result.css.toString()).toMatchSnapshot();

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      })));
    });
  });
});
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
    global.typographyTest = mod.exports;
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

  var variables = ['font-family-mono', 'font-family-sans-serif', 'font-family-serif', 'font-family-helvetica', 'base-font-size', 'typescale-map', 'font-size-map'];
  var render = createSassRenderer(__dirname);

  var renderClassic = function renderClassic(content) {
    return render("\n$feature-flags: (components-x: false, breaking-changes-x: false);\n".concat(content, "\n"));
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

  describe('_typography.scss', function () {
    describe.each(variables)('$%s', function (name) {
      it('should be exported',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _ref4, calls;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return renderClassic("\n@import '../typography';\n$t: test(global-variable-exists(".concat(name, "));\n"));

              case 2:
                _ref4 = _context2.sent;
                calls = _ref4.calls; // Check that global-variable-exists returned true

                expect(calls[0][0].getValue()).toBe(true);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      })));
      it('should match export value',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var _ref6, calls;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return renderClassic("\n@import '../typography';\n$t: test($".concat(name, ");\n"));

              case 2:
                _ref6 = _context3.sent;
                calls = _ref6.calls;
                expect(convert(calls[0][0])).toMatchSnapshot();

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      })));
    });
    describe('typescale mixin', function () {
      it('should return a font-size value for a valid size',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var sizes, tests, _ref8, result;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                sizes = ['giga', 'mega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'omega', 'caption', 'legal', 'p'];
                tests = sizes.map(function (size) {
                  return "\n.test-".concat(size, " {\n  @include typescale('").concat(size, "');\n}\n");
                });
                _context4.next = 4;
                return renderClassic("\n@import '../typography';\n".concat(tests.join('\n'), "\n"));

              case 4:
                _ref8 = _context4.sent;
                result = _ref8.result;
                expect(result.css.toString()).toMatchSnapshot();

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      })));
      it('should warn if given invalid size',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        var _ref10, output;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return renderClassic("\n@import '../typography';\n.test {\n  @include typescale('<unknown>');\n}\n");

              case 2:
                _ref10 = _context5.sent;
                output = _ref10.output;
                _context5.t0 = expect(output.warn);
                _context5.next = 7;
                return isClassic();

              case 7:
                if (!_context5.sent) {
                  _context5.next = 11;
                  break;
                }

                _context5.t1 = 1;
                _context5.next = 12;
                break;

              case 11:
                _context5.t1 = 2;

              case 12:
                _context5.t2 = _context5.t1;

                _context5.t0.toHaveBeenCalledTimes.call(_context5.t0, _context5.t2);

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      })));
    });
    describe('unit mixin', function () {
      it('should output the appropriate unit derived from a pixel value',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6() {
        var _ref12, calls;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return renderClassic("\n@import '../typography';\n\n$t: test(rem(16px));\n$t: test(em(16px));\n");

              case 2:
                _ref12 = _context6.sent;
                calls = _ref12.calls;
                expect(convert(calls[0][0])).toBe('1rem');
                expect(convert(calls[1][0])).toBe('1em');

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      })));
    });
    describe('helvetica mixin', function () {
      it('should output a font-family value',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7() {
        var _ref14, result;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return renderClassic("\n@import '../typography';\n.test {\n  @include helvetica();\n}\n");

              case 2:
                _ref14 = _context7.sent;
                result = _ref14.result;
                expect(result.css.toString()).toMatchSnapshot();

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      })));
    });
    describe('font-family mixin', function () {
      it('should output IBM Plex if css--plex is set to true',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8() {
        var _ref16, result;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return renderClassic("\n@import '../typography';\n$css--plex: true;\n\n.test {\n  @include font-family();\n}\n");

              case 2:
                _ref16 = _context8.sent;
                result = _ref16.result;
                expect(result.css.toString()).toEqual(expect.stringContaining('ibm-plex-sans'));

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      })));
      it('should output IBM Helvetica if css--plex is set to false',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9() {
        var _ref18, result;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return renderClassic("\n@import '../typography';\n$css--plex: false;\n\n.test {\n  @include font-family();\n}\n");

              case 2:
                _ref18 = _context9.sent;
                result = _ref18.result;
                expect(result.css.toString()).toEqual(expect.stringContaining('IBM Helvetica'));

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      })));
    });
    describe('font-smoothing mixin', function () {
      it('should output font-smoothing properties',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10() {
        var _ref20, result;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return renderClassic("\n@import '../typography';\n\n.test {\n  @include font-smoothing();\n}\n");

              case 2:
                _ref20 = _context10.sent;
                result = _ref20.result;
                expect(result.css.toString()).toMatchSnapshot();

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      })));
    });
    describe('letter-spacing mixin', function () {
      it('should output letter-spacing properties',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11() {
        var _ref22, result;

        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return renderClassic("\n@import '../typography';\n\n.test {\n  @include letter-spacing();\n}\n");

              case 2:
                _ref22 = _context11.sent;
                result = _ref22.result;
                expect(result.css.toString()).toMatchSnapshot();

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      })));
    });
  });
});
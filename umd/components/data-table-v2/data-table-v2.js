(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../../globals/js/feature-flags", "../../globals/js/settings", "../../globals/js/misc/mixin", "../../globals/js/mixins/create-component", "../../globals/js/mixins/init-component-by-search", "../../globals/js/mixins/evented-state", "../../globals/js/misc/event-matches"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../../globals/js/feature-flags"), require("../../globals/js/settings"), require("../../globals/js/misc/mixin"), require("../../globals/js/mixins/create-component"), require("../../globals/js/mixins/init-component-by-search"), require("../../globals/js/mixins/evented-state"), require("../../globals/js/misc/event-matches"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.featureFlags, global.settings, global.mixin, global.createComponent, global.initComponentBySearch, global.eventedState, global.eventMatches);
    global.dataTableV2 = mod.exports;
  }
})(this, function (_exports, _featureFlags, _settings, _mixin2, _createComponent, _initComponentBySearch, _eventedState, _eventMatches) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _eventedState = _interopRequireDefault(_eventedState);
  _eventMatches = _interopRequireDefault(_eventMatches);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };

  var suffix = _featureFlags.componentsX ? '' : '-v2';

  var DataTableV2 =
  /*#__PURE__*/
  function (_mixin) {
    _inherits(DataTableV2, _mixin);
    /**
     * Data Table
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends   EventedState
     * @param {HTMLElement} element The root element of tables
     * @param {Object} [options] the... options
     * @param {string} [options.selectorInit] selector initialization
     * @param {string} [options.selectorExpandCells] css selector for expand
     * @param {string} [options.expandableRow] css selector for expand
     * @param {string} [options.selectorParentRows] css selector for rows housing expansion
     * @param {string} [options.selectorTableBody] root css for table body
     * @param {string} [options.eventTrigger] selector for event bubble capture points
     * @param {string} [options.eventParentContainer] used find the bubble container
     */


    function DataTableV2(_element, options) {
      var _this;

      _classCallCheck(this, DataTableV2);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTableV2).call(this, _element, options));

      _this._sortToggle = function (detail) {
        var element = detail.element,
            previousValue = detail.previousValue;
        toArray(_this.tableHeaders).forEach(function (header) {
          var sortEl = header.querySelector(_this.options.selectorTableSort);

          if (sortEl !== null && sortEl !== element) {
            sortEl.classList.remove(_this.options.classTableSortActive);
            sortEl.classList.remove(_this.options.classTableSortAscending);
          }
        });

        if (!previousValue) {
          element.dataset.previousValue = 'ascending';
          element.classList.add(_this.options.classTableSortActive);
          element.classList.add(_this.options.classTableSortAscending);
        } else if (previousValue === 'ascending') {
          element.dataset.previousValue = 'descending';
          element.classList.add(_this.options.classTableSortActive);
          element.classList.remove(_this.options.classTableSortAscending);
        } else if (previousValue === 'descending') {
          element.removeAttribute('data-previous-value');
          element.classList.remove(_this.options.classTableSortActive);
          element.classList.remove(_this.options.classTableSortAscending);
        }
      };

      _this._selectToggle = function (detail) {
        var element = detail.element;
        var checked = element.checked; // increment the  count

        _this.state.checkboxCount += checked ? 1 : -1;
        _this.countEl.textContent = _this.state.checkboxCount;
        var row = element.parentNode.parentNode;
        row.classList.toggle(_this.options.classTableSelected); // toggle on/off batch action bar

        _this._actionBarToggle(_this.state.checkboxCount > 0);
      };

      _this._selectAllToggle = function (_ref) {
        var element = _ref.element;
        var checked = element.checked;
        var inputs = toArray(_this.element.querySelectorAll(_this.options.selectorCheckbox));
        _this.state.checkboxCount = checked ? inputs.length - 1 : 0;
        inputs.forEach(function (item) {
          item.checked = checked;
          var row = item.parentNode.parentNode;

          if (checked && row) {
            row.classList.add(_this.options.classTableSelected);
          } else {
            row.classList.remove(_this.options.classTableSelected);
          }
        });

        _this._actionBarToggle(_this.state.checkboxCount > 0);

        if (_this.batchActionEl) {
          _this.countEl.textContent = _this.state.checkboxCount;
        }
      };

      _this._actionBarCancel = function () {
        var inputs = toArray(_this.element.querySelectorAll(_this.options.selectorCheckbox));
        var row = toArray(_this.element.querySelectorAll(_this.options.selectorTableSelected));
        row.forEach(function (item) {
          item.classList.remove(_this.options.classTableSelected);
        });
        inputs.forEach(function (item) {
          item.checked = false;
        });
        _this.state.checkboxCount = 0;

        _this._actionBarToggle(false);

        if (_this.batchActionEl) {
          _this.countEl.textContent = _this.state.checkboxCount;
        }
      };

      _this._actionBarToggle = function (toggleOn) {
        var transition = function transition(evt) {
          _this.batchActionEl.removeEventListener('transitionend', transition);

          if (evt.target.matches(_this.options.selectorActions)) {
            if (_this.batchActionEl.dataset.active === 'false') {
              _this.batchActionEl.setAttribute('tabIndex', -1);
            } else {
              _this.batchActionEl.setAttribute('tabIndex', 0);
            }
          }
        };

        if (toggleOn) {
          _this.batchActionEl.dataset.active = true;

          _this.batchActionEl.classList.add(_this.options.classActionBarActive);
        } else if (_this.batchActionEl) {
          _this.batchActionEl.dataset.active = false;

          _this.batchActionEl.classList.remove(_this.options.classActionBarActive);
        }

        if (_this.batchActionEl) {
          _this.batchActionEl.addEventListener('transitionend', transition);
        }
      };

      _this._expandableRowsInit = function (expandableRows) {
        expandableRows.forEach(function (item) {
          if (!_featureFlags.componentsX) {
            item.classList.remove(_this.options.classExpandableRowHidden);

            _this.tableBody.removeChild(item);
          }
        });
      };

      _this._rowExpandToggle = function (_ref2) {
        var element = _ref2.element,
            initialEvt = _ref2.initialEvt;
        var parent = (0, _eventMatches.default)(initialEvt, _this.options.eventParentContainer);

        var index = _this.expandCells.indexOf(element);

        if (element.dataset.previousValue === undefined || element.dataset.previousValue === 'expanded') {
          element.dataset.previousValue = 'collapsed';
          parent.classList.add(_this.options.classExpandableRow);

          if (!_featureFlags.componentsX) {
            _this.tableBody.insertBefore(_this.expandableRows[index], _this.parentRows[index + 1]);
          }
        } else {
          parent.classList.remove(_this.options.classExpandableRow);

          if (!_featureFlags.componentsX) {
            _this.tableBody.removeChild(parent.nextElementSibling);
          }

          element.dataset.previousValue = 'expanded';
        }
      };

      _this._expandableHoverToggle = function (element) {
        element.previousElementSibling.classList.add(_this.options.classExpandableRowHover);

        var mouseout = function mouseout() {
          element.previousElementSibling.classList.remove(_this.options.classExpandableRowHover);
          element.removeEventListener('mouseout', mouseout);
        };

        element.addEventListener('mouseout', mouseout);
      };

      _this._toggleState = function (element, evt) {
        var data = element.dataset;
        var label = data.label ? data.label : '';
        var previousValue = data.previousValue ? data.previousValue : '';
        var initialEvt = evt;

        _this.changeState({
          group: data.event,
          element: element,
          label: label,
          previousValue: previousValue,
          initialEvt: initialEvt
        });
      };

      _this._keydownHandler = function (evt) {
        if (evt.which === 27) {
          _this._actionBarCancel();
        }
      };

      _this.refreshRows = function () {
        var newExpandCells = toArray(_this.element.querySelectorAll(_this.options.selectorExpandCells));
        var newExpandableRows = toArray(_this.element.querySelectorAll(_this.options.selectorExpandableRows));
        var newParentRows = toArray(_this.element.querySelectorAll(_this.options.selectorParentRows)); // check if this is a refresh or the first time

        if (_this.parentRows.length > 0) {
          var diffParentRows = newParentRows.filter(function (newRow) {
            return !_this.parentRows.some(function (oldRow) {
              return oldRow === newRow;
            });
          }); // check if there are expandable rows

          if (newExpandableRows.length > 0) {
            var diffExpandableRows = diffParentRows.map(function (newRow) {
              return newRow.nextElementSibling;
            });
            var mergedExpandableRows = [].concat(_toConsumableArray(toArray(_this.expandableRows)), _toConsumableArray(toArray(diffExpandableRows)));

            _this._expandableRowsInit(diffExpandableRows);

            _this.expandableRows = mergedExpandableRows;
          }
        } else if (newExpandableRows.length > 0) {
          _this._expandableRowsInit(newExpandableRows);

          _this.expandableRows = newExpandableRows;
        }

        _this.expandCells = newExpandCells;
        _this.parentRows = newParentRows;
      };

      _this.container = _element.parentNode;
      _this.toolbarEl = _this.element.querySelector(_this.options.selectorToolbar);
      _this.batchActionEl = _this.element.querySelector(_this.options.selectorActions);
      _this.countEl = _this.element.querySelector(_this.options.selectorCount);
      _this.cancelEl = _this.element.querySelector(_this.options.selectorActionCancel);
      _this.tableHeaders = _this.element.querySelectorAll('th');
      _this.tableBody = _this.element.querySelector(_this.options.selectorTableBody);
      _this.expandCells = [];
      _this.expandableRows = [];
      _this.parentRows = [];

      _this.refreshRows();

      _this.element.addEventListener('mouseover', function (evt) {
        var eventElement = (0, _eventMatches.default)(evt, _this.options.selectorChildRow);

        if (eventElement) {
          _this._expandableHoverToggle(eventElement, true);
        }
      });

      _this.element.addEventListener('click', function (evt) {
        var eventElement = (0, _eventMatches.default)(evt, _this.options.eventTrigger);

        if (eventElement) {
          _this._toggleState(eventElement, evt);
        }
      });

      _this.element.addEventListener('keydown', _this._keydownHandler);

      _this.state = {
        checkboxCount: 0
      };
      return _this;
    }

    _createClass(DataTableV2, [{
      key: "_changeState",
      value: function _changeState(detail, callback) {
        this[this.constructor.eventHandlers[detail.group]](detail);
        callback();
      }
    }], [{
      key: "options",
      get: function get() {
        var prefix = _settings.default.prefix;
        return {
          selectorInit: "[data-table".concat(suffix, "]"),
          selectorToolbar: ".".concat(prefix, "--table--toolbar"),
          selectorActions: ".".concat(prefix, "--batch-actions"),
          selectorCount: '[data-items-selected]',
          selectorActionCancel: ".".concat(prefix, "--batch-summary__cancel"),
          selectorCheckbox: ".".concat(prefix, "--checkbox"),
          selectorExpandCells: "td.".concat(prefix, "--table-expand").concat(suffix),
          selectorExpandableRows: ".".concat(prefix, "--expandable-row").concat(suffix),
          selectorParentRows: ".".concat(prefix, "--parent-row").concat(suffix),
          selectorChildRow: '[data-child-row]',
          selectorTableBody: 'tbody',
          selectorTableSort: ".".concat(prefix, "--table-sort").concat(suffix),
          selectorTableSelected: ".".concat(prefix, "--data-table").concat(suffix, "--selected"),
          classExpandableRow: "".concat(prefix, "--expandable-row").concat(suffix),
          classExpandableRowHidden: "".concat(prefix, "--expandable-row--hidden").concat(suffix),
          classExpandableRowHover: "".concat(prefix, "--expandable-row--hover").concat(suffix),
          classTableSortAscending: "".concat(prefix, "--table-sort").concat(suffix, "--ascending"),
          classTableSortActive: "".concat(prefix, "--table-sort").concat(suffix, "--active"),
          classActionBarActive: "".concat(prefix, "--batch-actions--active"),
          classTableSelected: "".concat(prefix, "--data-table").concat(suffix, "--selected"),
          eventBeforeExpand: "data-table".concat(suffix, "-beforetoggleexpand"),
          eventAfterExpand: "data-table".concat(suffix, "-aftertoggleexpand"),
          eventBeforeSort: "data-table".concat(suffix, "-beforetogglesort"),
          eventAfterSort: "data-table".concat(suffix, "-aftertogglesort"),
          eventTrigger: '[data-event]',
          eventParentContainer: '[data-parent-row]'
        };
      }
    }]);

    DataTableV2.components = new WeakMap();
    DataTableV2.eventHandlers = {
      expand: '_rowExpandToggle',
      sort: '_sortToggle',
      select: '_selectToggle',
      'select-all': '_selectAllToggle',
      'action-bar-cancel': '_actionBarCancel'
    };
    return DataTableV2;
  }((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _eventedState.default));

  var _default = DataTableV2;
  _exports.default = _default;
});
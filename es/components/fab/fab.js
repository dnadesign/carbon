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
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


import warning from 'warning';
import { breakingChangesX } from '../../globals/js/feature-flags';
import mixin from '../../globals/js/misc/mixin';
import createComponent from '../../globals/js/mixins/create-component';
import initComponentByEvent from '../../globals/js/mixins/init-component-by-event';
import handles from '../../globals/js/mixins/handles';
import on from '../../globals/js/misc/on';
import removedComponent from '../removed-component';
var didWarnAboutDeprecation;

var FabButton =
/*#__PURE__*/
function (_mixin) {
  _inherits(FabButton, _mixin);
  /**
   * Floating action button.
   * @extends CreateComponent
   * @extends InitComponentByEvent
   * @extends Handles
   * @param {HTMLElement} element The element working as a floting action button.
   */


  function FabButton(element) {
    var _this;

    _classCallCheck(this, FabButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FabButton).call(this, element));

    if (process.env.NODE_ENV !== "production") {
      process.env.NODE_ENV !== "production" ? warning(didWarnAboutDeprecation, 'The `FabButton` component in `carbon-components` has been deprecated. It will be removed in the next major release.') : void 0;
      didWarnAboutDeprecation = true;
    }

    _this.manage(on(element, 'click', function (event) {
      _this.toggle(event);
    }));

    return _this;
  }
  /**
   * A method called when this widget is created upon clicking.
   * @param {Event} event The event triggering the creation.
   */


  _createClass(FabButton, [{
    key: "createdByEvent",
    value: function createdByEvent(event) {
      this.toggle(event);
    }
    /**
     * Toggles this floating action button.
     * @param {Event} event The event triggering this method.
     */

  }, {
    key: "toggle",
    value: function toggle(event) {
      if (this.element.tagName === 'A') {
        event.preventDefault();
      }

      if (this.element.dataset.state === 'closed') {
        this.element.dataset.state = 'open';
      } else {
        this.element.dataset.state = 'closed';
      }
    }
    /**
     * Instantiates floating action button of the given element.
     * @param {HTMLElement} element The element.
     */

  }], [{
    key: "create",
    value: function create(element) {
      return this.components.get(element) || new this(element);
    }
    /**
     * The map associating DOM element and floating action button instance.
     * @member FabButton.components
     * @type {WeakMap}
     */

  }]);

  FabButton.components = new WeakMap();
  FabButton.options = {
    selectorInit: '[data-fab]',
    initEventNames: ['click']
  };
  return FabButton;
}(mixin(createComponent, initComponentByEvent, handles));

export default !breakingChangesX ? FabButton : removedComponent('FabButton');
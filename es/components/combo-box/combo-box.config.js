/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

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

var featureFlags = require('../../globals/js/feature-flags');

var _require = require('../../globals/js/settings'),
    prefix = _require.prefix;

var items = [{
  id: 'downshift-1-item-0',
  label: 'Option 1'
}, {
  id: 'downshift-1-item-1',
  label: 'Option 2'
}, {
  id: 'downshift-1-item-2',
  label: 'Option 3',
  selected: true
}, {
  id: 'downshift-1-item-3',
  label: 'Option 4'
}, {
  id: 'downshift-1-item-4',
  label: 'An example option that is really long to show what should be done to handle long text'
}];
module.exports = {
  context: {
    featureFlags: featureFlags,
    prefix: prefix
  },
  variants: [{
    name: 'default',
    label: 'Combo Box',
    context: {
      items: items
    }
  }].concat(_toConsumableArray(featureFlags.componentsX ? [{
    name: 'light',
    label: 'Light',
    context: {
      light: true,
      items: items
    }
  }] : [{
    name: 'disabled',
    label: 'Disabled',
    context: {
      disabled: true,
      items: items
    }
  }]))
};
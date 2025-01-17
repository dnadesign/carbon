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
    global.textAreaConfig = mod.exports;
  }
})(this, function () {
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */
  'use strict';

  var _require = require('../../globals/js/settings'),
      prefix = _require.prefix;

  var _require2 = require('../../globals/js/feature-flags'),
      componentsX = _require2.componentsX;

  module.exports = {
    context: {
      prefix: prefix,
      componentsX: componentsX
    },
    variants: [{
      name: 'default',
      label: 'Text Area',
      notes: "\n        Text areas enable the user to interact with and input data. A text area is used when you\n        anticipate the user to input more than 1 sentence.\n      "
    }, {
      name: 'light',
      label: 'Light',
      context: {
        light: true
      }
    }]
  };
});
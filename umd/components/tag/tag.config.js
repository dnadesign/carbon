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
    global.tagConfig = mod.exports;
  }
})(this, function () {
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */
  'use strict';

  var featureFlags = require('../../globals/js/feature-flags');

  var _require = require('../../globals/js/settings'),
      prefix = _require.prefix;

  var _require2 = require('../../globals/js/feature-flags'),
      componentsX = _require2.componentsX;

  var tags = !componentsX ? [{
    type: 'ibm',
    label: 'IBM'
  }, {
    type: 'beta',
    label: 'Beta'
  }, {
    type: 'third-party',
    label: 'Third-Party'
  }, {
    type: 'local',
    label: 'Local'
  }, {
    type: 'dedicated',
    label: 'Dedicated'
  }, {
    type: 'custom',
    label: 'Custom'
  }, {
    type: 'experimental',
    label: 'Experimental'
  }, {
    type: 'community',
    label: 'Community'
  }, {
    type: 'private',
    label: 'Private'
  }] : [{
    type: 'red',
    label: 'Red'
  }, {
    type: 'magenta',
    label: 'Magenta'
  }, {
    type: 'purple',
    label: 'Purple'
  }, {
    type: 'blue',
    label: 'Blue'
  }, {
    type: 'cyan',
    label: 'Cyan'
  }, {
    type: 'teal',
    label: 'Teal'
  }, {
    type: 'green',
    label: 'Green'
  }, {
    type: 'gray',
    label: 'Gray'
  }, {
    type: 'cool-gray',
    label: 'Cool-Gray'
  }, {
    type: 'warm-gray',
    label: 'Warm-Gray'
  }];
  module.exports = {
    context: {
      featureFlags: featureFlags,
      prefix: prefix
    },
    variants: [{
      name: 'default',
      label: 'Tag',
      context: {
        tags: tags,
        componentsX: componentsX
      }
    }, {
      name: 'filter',
      label: 'Tag (filter)',
      context: {
        filter: true
      }
    }]
  };
});
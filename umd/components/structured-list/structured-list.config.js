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
    global.structuredListConfig = mod.exports;
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

  var columns = !componentsX ? [{
    name: 'column1',
    title: 'Column1',
    nowrap: true
  }, {
    name: 'column2',
    title: 'Column2'
  }, {
    name: 'column3',
    title: 'Column3'
  }] : [{
    name: 'column1',
    title: 'Column1',
    nowrap: true
  }, {
    name: 'column2',
    title: 'Column2'
  }];
  /* eslint-disable max-len */

  var rows = !componentsX ? [{
    selected: true,
    id: 'apache-id',
    value: 'apache spark',
    selectionLabel: 'apache spark',
    column1: 'Row 1',
    column2: 'Row 1',
    column3: "\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n        "
  }, {
    id: 'cloudant-id',
    value: 'Cloudant',
    selectionLabel: 'Cloudant',
    column1: 'Row 2',
    column2: 'Row 2',
    column3: "\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n        "
  }, {
    id: 'block-storate-id',
    value: 'block-storage',
    selectionLabel: 'block-storage',
    column1: 'Row 3',
    column2: 'Row 3',
    column3: "\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n        "
  }, {
    id: 'open-whisk-id',
    value: 'open-whisk',
    selectionLabel: 'open-whisk',
    column1: 'Row 4',
    column2: 'Row 4',
    column3: "\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n        "
  }] : [{
    selected: true,
    id: 'apache-id',
    value: 'apache spark',
    selectionLabel: 'apache spark',
    column1: 'Row 1',
    column2: "\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue.\n        "
  }, {
    id: 'cloudant-id',
    value: 'Cloudant',
    selectionLabel: 'Cloudant',
    column1: 'Row 2',
    column2: "\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n        "
  }, {
    id: 'block-storate-id',
    value: 'block-storage',
    selectionLabel: 'block-storage',
    column1: 'Row 3',
    column2: "\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue.\n        "
  }, {
    id: 'open-whisk-id',
    value: 'open-whisk',
    selectionLabel: 'open-whisk',
    column1: 'Row 4',
    column2: "\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.\n        "
  }];
  /* eslint-enable max-len */

  module.exports = {
    context: {
      featureFlags: {
        componentsX: componentsX
      },
      prefix: prefix
    },
    variants: [{
      name: 'default',
      label: 'Structured List',
      context: {
        columns: columns,
        rows: rows.slice(0, 2)
      }
    }, {
      name: 'selection',
      label: 'With selection',
      context: {
        componentsX: componentsX,
        columns: columns,
        rows: rows,
        hasBorder: true,
        selectable: true,
        group: 'services'
      }
    }]
  };
});
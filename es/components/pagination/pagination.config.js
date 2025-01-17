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

var itemsPerPageChoices = [{
  value: '10',
  label: '10'
}, {
  value: '20',
  label: '20'
}, {
  value: '30',
  label: '30'
}, {
  value: '40',
  label: '40'
}, {
  value: '50',
  label: '50'
}];
var pageNumberChoices = [{
  value: '1',
  label: '1'
}, {
  value: '2',
  label: '2'
}, {
  value: '3',
  label: '3'
}, {
  value: '4',
  label: '4'
}, {
  value: '5',
  label: '5'
}];
var variants = [{
  name: componentsX ? 'deprecated' : 'default',
  // Not supporting theme switcher here
  label: 'V1',
  meta: {
    removed: componentsX,
    xVersionNotSupported: true
  },
  context: {
    itemsPerPageChoices: itemsPerPageChoices,
    pageNumberChoices: pageNumberChoices,
    version: 'v1'
  },
  notes: "\n      Pagination is used for splitting up content or data into several pages,\n      with a control for navigating to the next or previous page.\n    "
}, {
  name: componentsX ? 'default' : 'v2',
  // Not supporting theme switcher here
  label: componentsX ? 'Default' : 'V2',
  // Not supporting theme switcher here
  context: {
    version: 'x',
    itemsPerPageChoices: itemsPerPageChoices,
    pageNumberChoices: pageNumberChoices,
    totalPages: 5
  }
}, {
  // `name`/`label`` here not supporting theme switcher
  name: componentsX ? 'Disabled Pagination Buttons' : 'v2 Disabled Pagination Buttons',
  label: componentsX ? 'Disabled Pagination Buttons' : 'V2 Disabled Pagination Buttons',
  context: {
    version: 'x',
    itemsPerPageChoices: [itemsPerPageChoices[0]],
    totalPages: 1,
    pageNumberChoices: [pageNumberChoices[0]],
    disabledPaginationButton: true
  },
  notes: "\n      Notify the user of their position in the page range by disabling the appropriate pagination buttons\n      at the start or end of the range.\n    "
}];
module.exports = {
  context: {
    featureFlags: featureFlags,
    prefix: prefix
  },
  variants: variants
};
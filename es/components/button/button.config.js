/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var _require = require('../../globals/js/settings'),
    prefix = _require.prefix,
    componentsX = _require.componentsX;

var featureFlags = require('../../globals/js/feature-flags');

module.exports = {
  default: 'primary',
  context: {
    featureFlags: featureFlags,
    prefix: prefix
  },
  variants: [{
    name: 'primary',
    label: 'Primary Buttons',
    notes: 'Primary buttons should be used for the principle call to action on the page.',
    context: {
      variant: 'primary'
    }
  }, {
    name: 'primary--small',
    label: 'Primary Buttons (Small)',
    notes: "\n        Small buttons may be used when there is not enough space for a\n        regular sized button. This issue is most found in tables. Small button should have three words\n        or less.\n      ",
    context: {
      variant: 'primary',
      small: true
    }
  }, {
    name: 'secondary',
    label: 'Secondary Buttons',
    notes: 'Secondary buttons should be used for secondary actions on each page.',
    context: {
      variant: 'secondary'
    }
  }, {
    name: 'secondary--small',
    label: 'Secondary Buttons (Small)',
    notes: "\n        Small buttons may be used when there is not enough space for a\n        regular sized button. This issue is most found in tables. Small button should have three words\n        or less.\n      ",
    context: {
      variant: 'secondary',
      small: true
    }
  }, {
    name: 'tertiary',
    label: 'Tertiary Buttons',
    notes: 'Tertiary buttons should be used for tertiary actions on each page.',
    context: {
      variant: 'tertiary'
    }
  }, {
    name: 'tertiary--small',
    label: 'Tertiary Buttons (Small)',
    notes: "\n        Small buttons may be used when there is not enough space for a\n        regular sized button. This issue is most found in tables. Small button should have three words\n        or less.\n      ",
    context: {
      variant: 'tertiary',
      small: true
    }
  }, {
    name: 'danger',
    label: 'Danger Buttons',
    notes: 'Danger buttons should be used for a negative action (such as Delete) on the page.',
    context: {
      variant: 'danger',
      danger: true
    }
  }, {
    name: 'danger--small',
    label: 'Danger Buttons (Small)',
    notes: "\n        Small buttons may be used when there is not enough space for a\n        regular sized button. This issue is most found in tables. Small button should have three words\n        or less.\n      ",
    context: {
      variant: 'danger',
      danger: true,
      small: true
    }
  }, {
    name: 'danger--primary',
    label: 'Primary Danger Buttons',
    meta: {
      removed: componentsX,
      xVersionNotSupported: true
    },
    context: {
      variant: 'danger--primary',
      danger: true
    }
  }, {
    name: 'danger--primary--small',
    label: 'Primary Danger Buttons (Small)',
    notes: "\n        Small buttons may be used when there is not enough space for a\n        regular sized button. This issue is most found in tables. Small button should have three words\n        or less.\n      ",
    meta: {
      removed: componentsX,
      xVersionNotSupported: true
    },
    context: {
      variant: 'danger--primary',
      danger: true,
      small: true
    }
  }, {
    name: 'ghost',
    label: 'Ghost Buttons',
    context: {
      variant: 'ghost'
    }
  }, {
    name: 'ghost--small',
    label: 'Ghost Buttons (Small)',
    notes: "\n        Small buttons may be used when there is not enough space for a\n        regular sized button. This issue is most found in tables. Small button should have three words\n        or less.\n      ",
    context: {
      variant: 'ghost',
      small: true
    }
  }]
};
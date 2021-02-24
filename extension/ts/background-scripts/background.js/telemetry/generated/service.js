/* eslint-disable */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// AUTOGENERATED BY glean_parser.  DO NOT EDIT.

import CounterMetricType from "@mozilla/glean/webext/private/metrics/counter";

("use strict");

/**
 * Language pair of user and website languages is not supported.
 *
 * Generated from `service.not_suppported`.
 */
export const notSuppported = new CounterMetricType({
  category: "service",
  name: "not_suppported",
  sendInPings: ["custom"],
  lifetime: "ping",
  disabled: false,
});

/**
 * The user and website languages do not match.
 *
 * Generated from `service.lang_mismatch`.
 */
export const langMismatch = new CounterMetricType({
  category: "service",
  name: "lang_mismatch",
  sendInPings: ["custom"],
  lifetime: "ping",
  disabled: false,
});

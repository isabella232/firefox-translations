/* eslint-disable */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// AUTOGENERATED BY glean_parser. DO NOT EDIT. DO NOT COMMIT.

import PingType from "@mozilla/glean/webext/private/ping";
/**
 * A custom ping, sending time is fully controlled by the application.
 *
 * Generated from `custom`.
 */
export const custom = new PingType({
  includeClientId: true,
  sendIfEmpty: false,
  name: "custom",
  reasonCodes: [],
});

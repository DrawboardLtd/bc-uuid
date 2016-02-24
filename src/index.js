/* UUID STRUCTURE
 *
 *  |36--------------------------------|
 *  xxxxxxxx-Vxxx-MMxx-xxxx-xxxxxxxxxxxx
 *  |8-----| |4-| |4-| |4-| |12--------|
 *
 *  The first 8 Characters are the timestamp (base36)
 *  of when the UUID was created
 *
 *  V  = Version = 1
 *  MM = Mark    = bc
 *  x  = acceptable character /[0-9a-z]/
 *
 */

var MARK    = "BC"
var VERSION = "1"

import { stamp as s } from "./stamp"
import { group as g } from "./group"

export const stamp = s
export const group = g

export var generate = () => ([
  group(8),
  VERSION + group(3),
  MARK + group(2),
  group(4),
  group(12),
].join("-"))



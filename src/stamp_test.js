import { stamp } from "./stamp"
import assert, { equal } from "assert"
import { times } from "./test_helpers"

describe("stamp", () => {
  it("gives the timestamp back in base36", () => {
    equal(stamp(), (+new Date()).toString(36))
  })

  var ts = stamp()
  it(`8 characters long matching: 0-9 a-z ${ ts }`, () => {
    assert((/^[0-9a-z]{8}$/).test(ts))
  })
})

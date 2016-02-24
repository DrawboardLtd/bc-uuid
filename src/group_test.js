import { group } from "./group"
import assert, { equal } from "assert"
import { range } from "./test_helpers"


describe("group", () => {
  range(0,32).forEach(d => {
    var g = group(d)
    var p = new RegExp(`^[0-9A-F]{${ d }}$`)

    describe(`size of: ${ d } -- ${ g }`, () => {
      it("is the proper length", () => {
        equal(g.length, d)
      })

      it(`is the proper pattern -- ${ p }`, () => {
        assert(p.test(g))
      })
    })
  })
})

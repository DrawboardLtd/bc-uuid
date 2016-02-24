import { generate } from "./index"
import assert, { equal } from "assert"
import { times } from "./test_helpers"
import { stamp } from "./stamp"

describe("uuid", () => {
  describe("generate", () => {

    times(100, () => {
      var g = generate()

      it (`correct format -- ${ g }`, () => {
        var r = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/
        assert((r).test(g))
      })

    })

  })
})

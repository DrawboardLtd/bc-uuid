import { randChar } from "./rand_char"
import assert from "assert"
import { times } from "./test_helpers"

var re = /[0-9A-F]/

describe("randChar", () => {
  times(100, () => {
    var char = randChar()
    it(`random character between 0-9 or a-z -- ${ char }`, () => {
      assert((/^[0-9A-F]$/).test(char))
    })
  })
})

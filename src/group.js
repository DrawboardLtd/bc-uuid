import { randChar } from "./rand_char"

export var group = (length, result=[])  => {
  if (result.length >= length) return result.join("")
  return group(length, [...result, randChar()])
}

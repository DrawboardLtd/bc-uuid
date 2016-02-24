var CHARS = "0123456789ABCDEF"

export var randChar = () =>
  CHARS[~~(Math.random() * CHARS.length)]

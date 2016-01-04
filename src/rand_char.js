var CHARS = "0123456789abcdefghijklmnopqrstuvxyz"

export var randChar = () =>
  CHARS[~~(Math.random() * CHARS.length)]

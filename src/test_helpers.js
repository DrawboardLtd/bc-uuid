export var times = (num, fn) => {
  fn(num)
  if (!!num) return times(num - 1, fn)
}

export var range = (start, end, acc=[]) =>
  (start >= end)
    ? acc
    : range(start + 1, end, [...acc, start])


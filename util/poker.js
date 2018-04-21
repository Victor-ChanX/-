var number = [1, 1, 2, 3, 4, 3, 3]

function check (number) {
  console.log(number)
}

if (number.lenght > '5') {
  check(number)
}

function checkArray (para, arr) {
  let processArr = arr.filter(function (value) {
    return value === para
  })

  return processArr.length // 这里返回数组长度或者相应处理
}

console.log(checkArray(3, number))

var number = [1, 1, 2, 2, 4]

function checkArray (para, arr) {
  let processArr = arr.filter(function (value) {
    return value === para
  })

  return processArr // 这里返回数组长度或者相应处理
}

function checkPoker (number) {
  for (let i = 0; i < number.length; i++) {
    let s = checkArray(number[i], number)
    console.log(s)
  }
}

checkPoker(number)

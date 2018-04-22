/**
 * 判断梭哈牌型大小的函数，将牌型分为[1,1]意味着方块
 */

var number = [4, 2, 3, 1, 5, 4]

/**
 * 手动实现快排并返回一个新数组
 */
function numberSort (arr) {
  if (arr.length <= 1) { return arr };// 注意不要写arr===[] 永远都是false
  var pivotIndex = Math.floor(arr.length / 2)
  var pivot = arr.splice(pivotIndex, 1)[0]// 数组被切掉了pivot
  var left = []
  var right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return numberSort(left).concat(pivot, numberSort(right))
}

/**
 * 数组内寻找有相同的牌并单独抽出
 */
function checkArray (para, arr) {
  let processArr = arr.filter(function (value) {
    if (value === para) {
      return value === para
    }
  })
  for (var i = 0; i < processArr.length; i++) {
    for (var j = 0; j < number.length; j++) {
      if (number[j] === processArr[i]) {
        number.splice(j, 1)
        j--
      }
    }
  }
  return processArr // 这里返回数组长度或者相应处理
}

function checkPoker (number) {
  var leval = 0
  while (number[0] !== undefined) {
    let s = checkArray(number[0], number)
    if (s.length === 2) {
      console.log(s + '一对')
      leval = 2
      console.log(leval)
    } else if (s.length === 3) {
      console.log(s + '三条')
      leval = 3
      console.log(leval)
    } else if (s.length === 4) {
      console.log(s + '炸弹')
      leval = 4
      console.log(leval)
    } else {
      console.log(s + '单张')
      leval = 1
      console.log(leval)
    }
  }
}

function start () {
  number = numberSort(number)
  checkPoker(number)
}

start()

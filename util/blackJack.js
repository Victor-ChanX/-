/**
 * 21点卡牌游戏规则函数，所有牌型分为[1,1]前面为牌型后方为花色,方块为1,梅花为2,红桃为3,黑桃为4
 * A暂时只当作1点
 * 功能分为：
 * 1、判断牌型点数总和
 * 2、双方牌的点数相比
 * 3、点数相同的情况下比最大的点的花色
 * 4、抽牌函数
 */

/**
 * 判断牌型点数函数
 */
var number = [[2, 1], [2, 3], [6, 2], [7, 3], [2, 2]]
var number2 = [[2, 1], [2, 3], [6, 2], [8, 2], [1, 2]]
function checkPoints (number) {
  let sum = 0
  for (let i = 0; i < number.length; i++) {
    let num = number[i][0]
    if (num >= 10) {
      sum += 10
    } else {
      sum += num
    }
  }
  return sum
}

/**
 * 判断花色函数
 */
function checkLeval (number) {
  let newArr = numberSort(number)
  return newArr[newArr.length - 1][1]
}

/**
 * 当点数相同的时候判断最大点数是否相同
 */
function checkMaxPoint (number) {
  let newArr = numberSort(number)
  return newArr[newArr.length - 1][0]
}

/**
 * 执行点数相比
 */
function pointCompare (arr1, arr2) {
  let myPoint = checkPoints(arr1)
  let youPoint = checkPoints(arr2)
  if (myPoint > youPoint) {
    console.log('YOU WIN')
  } else if (myPoint === youPoint) {
    let myMaxPoint = checkMaxPoint(arr1)
    let youMaxPoint = checkMaxPoint(arr2)
    if (myMaxPoint === youMaxPoint) {
      let myLeval = checkLeval(arr1)
      let youLeval = checkLeval(arr2)
      if (myLeval > youLeval) {
        console.log('YOU WIN')
      } else {
        console.log('YOU LOSE')
      }
    } else if (myMaxPoint > youMaxPoint) {
      console.log('YOU WIN')
    } else {
      console.log('YOU LOSE')
    }
  } else {
    console.log('YOU LOSE')
  }
}
pointCompare(number, number2)

/**
 * 手动实现快排
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
 * 发牌函数
 */
var poker = {
  '1': [[1, 1], [1, 2], [1, 3], [1, 4]],
  '2': [[2, 1], [2, 2], [2, 3], [2, 4]],
  '3': [[3, 1], [3, 2], [3, 3], [3, 4]],
  '4': [[4, 1], [4, 2], [4, 3], [4, 4]],
  '5': [[5, 1], [5, 2], [5, 3], [5, 4]],
  '6': [[6, 1], [6, 2], [6, 3], [6, 4]],
  '7': [[7, 1], [7, 2], [7, 3], [7, 4]],
  '8': [[8, 1], [8, 2], [8, 3], [8, 4]],
  '9': [[9, 1], [9, 2], [9, 3], [9, 4]],
  '10': [[10, 1], [10, 2], [10, 3], [10, 4]],
  '11': [[11, 1], [11, 2], [11, 3], [11, 4]],
  '12': [[12, 1], [12, 2], [12, 3], [12, 4]],
  '13': [[13, 1], [13, 2], [13, 3], [13, 4]]
}
function deal () {
  var randomNumber = Math.random()
  var leval = Math.ceil(randomNumber * 4) - 1
  var point = Math.ceil(randomNumber * 13) - 1
  console.log(poker[point][leval])
}

deal()

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
var number = [[2, 1], [2, 3], [6, 2], [8, 2], [1, 2]]
function checkPoints (number) {
  let sum = 0
  for (let i = 0; i < number.length; i++) {
    let num = number[i][0]
    sum += num
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

console.log(checkLeval(number))

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

var ss = [12, 9, 3, 24, 2, 19, 10, 6, 5]
var st1 = [1,2,3,2], st2 = [9,1,4,4]
var suZero = [-4,-3,-1,0,1,4,5,10]
var conUniVal = [1,1,1,2,2,3,4,5,5,5,6,6,7]
var maxSum = [2,6,9,2,1,8,5,6,3]
var search = [1,2,3,4,5,7,8,9,12,13,15,19,20]
var radix = [345,5467,12,2345,23,49852]
var zig = "PAYPALISHIRING"
var two = [11, 2, 14, 7]
 
// linear search 선형 검색 , 순차 검색
// binary search 이진 검색 , 이분 검색 - 반으로 나누어서 연산 
// output: PAHNAPLSIIGYIR


let zigZag = (s, numRows) => {
    
    if (numRows == 1 || numRows > s.length) {
        return s 
    }

    var rows = Array(numRows).fill('')
    var index = 0 
    var canGoDown = false 

    for (let i = 0; i < s.length; i++) {
        rows[index] += s[i]

        if (index == 0 || index == numRows - 1) {
            canGoDown = !canGoDown
        }
        canGoDown ? index += 1 : index -= 1 
    }
    return rows.join('')
}


function twoSumOne(arr, target) {
    let map = {}

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i]

        if (complement in map) {
            return [map[complement], i]
        }
        map[arr[i]] = i 
    }
    return null 
}

console.log(twoSumOne(two, 9));
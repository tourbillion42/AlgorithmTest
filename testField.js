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


// ZigZag
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

// TwoSumFirst
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

// TwoSumSecond
let twoSumSecond = (arr, target) => {
    let hash = new Map() 

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i]

        if (hash.get(complement) !== undefined) {
            return [hash.get(complement), i]
        }
        hash.set(arr[i], i)
    }
    return []
}

// LinearSearch
let linearSearch = (arr, nums) => {

    for (let i = 0; i < arr.length; i++) {
        if (nums === arr[i]) {
            return i 
        }
    }
    return -1
}

// BinearSearch 
function binearSearch(arr, nums) {

    let start = 0 
    let end = arr.length - 1 
    let mid = Math.floor((start + end) / 2)
    
    while (nums !== arr[mid] && start <= end) {
        if (nums < arr[mid]) {
            end = mid - 1
        }
        else {
            start = mid + 1 
        }
        mid = Math.floor((start + end) / 2)
    }
    return nums === arr[mid] ? mid : -1
}

// two arrays are equal
let same = (ar1, ar2) => {

    for (let i = 0; i < ar1.length; i++) {
        let correctIdx = ar2.indexOf(ar1[i] ** 2) 

        if (correctIdx === -1) {
            return false
        }
        ar2.splice(correctIdx, 1)
    }
    return true
}

// ValidAnagram
function validAnagram(first, second) {
    
    if (first.length !== second.length) {
        return false
    }

    const lookUp = {}

    for (let i= 0; i < first.length; i++) {
        let letter = first[i]

        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1 
    }

    for (let j = 0; j < second.length; j++) {
        let letter = second[j]

        if (!lookUp[letter]) {
            return false
        }
        else {
            lookUp[letter] -= 1 
        }
    }
    return true
}



// Eloquent JavaScript
// Chapter 3 / Exercise

function min(a,b) {
    return a < b ? a : b
}
console.log(min(10,20))
console.log(min(-20,10))

function isEven(n) {
    if( n == 0)
        return true
    if( n == 1)
        return false
    return isEven(n-2)
}

console.log(isEven(0))
console.log(isEven(1))
console.log(isEven(2))
console.log(isEven(3))
console.log(isEven(4))
console.log(isEven(5))
console.log(isEven(6))
console.log(isEven(7))
console.log(isEven(8))
console.log(isEven(9))
console.log(isEven(10))

// Solution from book
function isEven(n) {
    if( n == 0)
        return true
    else if( n== 1)
        return false
    else if ( n < 0)
        return isEven(-n)
    else
        return isEven(n -2)
}

console.log(isEven(-1))
console.log(isEven(-2))
console.log(isEven(0))
console.log(isEven(1))
console.log(isEven(2))
console.log(isEven(3))

function countBs(str) {
    let count = 0
    for(let i = 0; i < str.length; i++)
        if(str[i] == 'B')
            ++count
    return count
}

console.log(countBs('BangladeshBBCountBs'))

function countChar(str,ch) {
    let count = 0;
    for(let i = 0; i < str.length; i++)
        if(str[i] == ch)
            ++count
    return count
}

console.log(countChar("Bangladesh","a"))
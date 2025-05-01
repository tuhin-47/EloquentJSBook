// Closure.. More Example FIBO

function memoFib(fn) {
    const cache = {}
    return function(n) {
        let position = n.toString()
        if(!cache[position]) {
            console.log("MISS! Calculating")
            cache[position] = fn (n)
        }else {
            console.log("HIT")
        }
        return cache[position]
    }
}

function fibo(n) {
    if( n == 1 || n == 2)
        return 1
    if( n <= 0 )
        return 0
    return fibo(n-1) + fibo(n -2)
}

const fiboCC = memoFib(fibo)
console.log(fiboCC(1))
console.log(fiboCC(2))
console.log(fiboCC(3))
console.log(fiboCC(4))
console.log(fiboCC(5))

console.log(fiboCC(2))
console.log(fiboCC(3))
console.log(fiboCC(4))
console.log(fiboCC(5))
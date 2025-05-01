//Eloquent JavaScript
// Chapter 3 [Functions]
//  closure

function wrapValue(n) {
    let local = n;
    return () => local;
}

const wrap1 = wrapValue(10)
const wrap2 = wrapValue(20)
console.log(wrap1())
console.log(wrap2())

function multiplier(factor) {
    return function(number) {
        return number * factor
    }
}

const twice = multiplier(2)
const trice = multiplier(3)

console.log(twice(100))
console.log(trice(500))

// More Examples on closure

console.log("More closure examples for better understanding")
function outer() {
    let count = 1;
    function inner() {
        count +=1;
        console.log(`count is : ${count}`)
    }
    return inner
}

const closure1 = outer()
const closure2 = outer()
closure1() // 2
closure1() // 3
closure1() // 4
closure1() // 5

closure2() // 2
closure2() // 3


// closure example to data privacy

function counter () {
    let count = 1;
    return {
        increment : function () { 
                                   ++count
                                   console.log(count)
        },
        decrement : function () {
                                    --count
                                    console.log(count)
        },
        getCount : function () { return count }
    }
}
console.log("Counter() Closure ")
const cc = counter()
cc.increment()
cc.increment()
cc.increment()

cc.decrement()
console.log(cc.getCount());
console.log("Counter Closure 2")
const cc2 = counter()
cc2.decrement()
cc2.decrement()

cc2.increment()
cc2.increment()
cc2.increment()
console.log(cc2.getCount())


// implementing cache using memoization

function memoize(fn) {
    const cache = {}
    return function (...args){
        let key = args.toString()
        if(!cache[key]){
            console.log("Cache MISS, Calculating")
            cache[key] = fn(...args)
        }else {
            console.log("Cache HIT, Retruning Result from cache")
        }
        return cache[key]
    }
}

function fact(n) {
    if( n <= 1)
        return 1;
    else 
        return n * fact( n -1)
}

const factCC = memoize(fact)
console.log(factCC(5))
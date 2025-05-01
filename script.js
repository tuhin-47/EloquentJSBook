//Eloquest JavaScript
//Chapter 2, Exercise

// Problem 1.
// My Soltion
// print = console.log
// for(let i = 1; i <= 7; i++){
//     let ll = i, line=''
//     while(ll--)
//         line +='#'
//     print(line)
// }
// //second way
// print("Applying another way")
// for(let i = 1; i <=7; i++){
//     let line = ''
//     for(let j = 0; j < i; j++)
//         line +='#'
//     print(line)

// }

// Solution from book
for(let line ='#'; line.length < 8; line +='#')
    console.log(line)



// Problem 2 

print = console.log

function fizzBuzz(){
    for(let i = 1; i <=100; i++){
        if( i % 3 ==0 && i % 5 ==0)
            print('FizzBuzz')
        else if( i % 3 == 0)
            print('Fizz')
        else if( i % 5 == 0 && i % 3 !=0 )
            print('Buzz')
        else
            print(i)
    }
}
//fizzBuzz()

//Solution from book
function fizzBuzzFromBook() {
    for(let i = 1; i < 100; i++ ){
        let output = ""
        if( i % 3 == 0)  output = 'Fizz'
        if( i % 5 == 0)  output += 'Buzz'
        console.log(output || i)
    }
}
//fizzBuzzFromBook()

function chessBoard() {
    let boardSize = 8
    print(`Printing ChessBoard for BoardSize ${boardSize}`)
    
    let startLineWithSpace = true
    let nextPositionToFill = '#'
    for(let i = 1; i <= boardSize; i++){
        let line = startLineWithSpace ? ' ' : '#'
        nextPositionToFill = startLineWithSpace ? '#':' '
        for(let j = 1; j < boardSize; j++){
            line += nextPositionToFill;
            nextPositionToFill = nextPositionToFill == '#' ? ' ': '#'
        }
        startLineWithSpace = ! startLineWithSpace;
        print(line)
    }
}
//chessBoard()
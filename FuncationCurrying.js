//Bind method
let multiply = function (x, y){
    console.log(x * y)
}

let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(5)


//Closure
let multiply3 = function (x){
    return function (y) {
        console.log(x * y)
    }
}

let multiplyByThree = multiply3(3)
multiplyByThree(5)
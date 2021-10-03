const arrOfNumbers = [1,2,3,4]
console.log(arrOfNumbers.reduce((accumulator, currentValue, index, array)=>array[index]=array[index]*2))
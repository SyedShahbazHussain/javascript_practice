let numbers = [2,4,1,6,7,5,3,1,9,15,8]
let num = '2,4,1,6,7,5,3,1,9,15,8'

let lowestToHighest = numbers.sort((a,b)=>a-b)
let highestToLowest = numbers.sort((a,b)=>b-a)

console.log(lowestToHighest)
console.log(highestToLowest)

//For number without array

// function sortDesending(nums){
//     return nums.toString().split('').sort((a,b)=>b-a).join('')
// }
// console.log(sortDesending(num))
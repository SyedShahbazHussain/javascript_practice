let numbers = [2,4,1,6,7,5,3,1,9,15,8]
// let num = '2,4,1,6,7,5,3,1,9,15,8'

let lowestToHighest = numbers.sort((a,b)=>a-b)
let highestToLowest = numbers.sort((a,b)=>b-a)

console.log(lowestToHighest)
console.log(highestToLowest)

//For number without array

// function sortDesending(nums){
//     return nums.toString().split('').sort((a,b)=>b-a).join('')
// }
// console.log(sortDesending(num))

// Using Loop


var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
          var x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }

console.log(Arr);

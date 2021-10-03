function clearArr(arr){
    while (arr.length){
        arr.pop()
    }
    return arr
}
const arr = [1,2,3,4]
// arr.length=0
console.log(clearArr(arr))
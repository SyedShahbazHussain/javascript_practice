const data = ['a' ,4 ,6 ,'b' ,'c' ,'a' ,'b' ,'e' ,4 ]

let unique= [...new Set(data)]
console.log(unique)

let unique2 = data.filter((ele, idx)=>idx===data.indexOf(ele))
console.log(unique2)
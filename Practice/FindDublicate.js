const num = [1,5,7,2,5,8,1]

const set = new Set(num)

const dublicates = num.filter(item=>{
    if(set.has(item)){
        set.delete(item)
    } else {
        return item
    }
})


const dublicates = num.filter((ele, index)=> index != num.indexOf(ele))

console.log(dublicates)
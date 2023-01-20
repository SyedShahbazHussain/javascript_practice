let name ={
    firstName: 'Shahbaz',
    lastName: 'Hussain',
    printFullName: function(){
        console.log(this.firstName + ' ' + this.lastName)
    }
}

let name2 ={
    firstName: 'Ali',
    lastName: 'Hussain'
}

let name3 ={
    firstName: 'Nehal',
    lastName: 'Hussain',
    printFullName: function(){
        console.log(this.firstName + ' ' + this.lastName)
    }
}

name.printFullName()

//funcation borrowing
name.printFullName.call(name3)

let printFullName= function(homeTown){
    console.log(this.firstName + ' ' + this.lastName + ' From ' + homeTown)
}

printFullName.call(name2, 'Karachi')
printFullName.apply(name3, ['Islamabad'])

//bind method
let printData = printFullName.bind(name2, 'Karachi')
printData()

// conclusion=>invoke a function and set its "this" value explicitly the diff b/w call & apply is call take data of obj as second argument and apply takes array as second argument,
// bind is use to make a copy and invoke or use it letter 

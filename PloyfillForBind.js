let name = {
    firstName: 'Shahbaz',
    lastName: 'Hussain'
}

let printName = function (homeTown, state, country) {
    console.log(this.firstName + ' ' + this.lastName, ' homeTown ', homeTown, ' state ', state, ' country ', country )
}

let printMyName = printName.bind(name, 'Karachi', 'Sindh', 'Pakistan')
printMyName()

Function.prototype.myBind = function(...args){
    let obj = this,
    params = args.slice(1)
    return function (...args2){
        obj.apply(args[0], [...params, ...args2])
    }
}

let printMyName2 = printName.myBind(name, 'Karachi', 'Sindh', 'Pakistan')
printMyName2()
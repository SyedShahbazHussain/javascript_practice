function reverse(s){

    // Using loop
    var o = 0
    for (var i = s.length-1; i >=0; i--)
        o+=s[i]
    return o;

    // Using ES6 
return s.split('').reverse().join('')
    
}

console.log(reverse('Hello World'))



const fibonacci = function(num) {
let first=1
let second =2
let fib=0
num=parseInt(num)
if(num<=2 &&num>=0){
    return 1
}
else if(num<0){
    return "OOPS"
}
else
{for (var i=3;i<num;i++){
    fib=first+second
    first=second
    second=fib
}
return fib
}

};

// Do not edit below this line
module.exports = fibonacci;

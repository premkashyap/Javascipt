var add = function(arg1, arg2, arg3) {
    return arg1+arg2+arg3;
}

var betterAddMethod= function() {
    var sum = 0;
    for(var i=0; i<arguments.length;i++) {
        sum+=arguments[i];
    }
    return sum;
}

console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1,2,3,4));

console.log(betterAddMethod(1,2));
console.log(betterAddMethod(1,2,3));
console.log(betterAddMethod(1,2,3,4));
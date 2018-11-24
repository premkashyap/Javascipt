'use strict'
var task = Object.create(Object.prototype);
task.title = "Task-Title";
task.Description = "Task-Description"

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.Description;
    },
    writable:false,
    enumerable:true,
    configurable:true
})

//task.toString= 'Hi';

task.printTitle = function() {
    return this.title;
}

task.printTitle.writable=false; // doesn't work. 
task.printTitle = 'Hi'; 
console.log(task.toString());
console.log(task.printTitle);

Object.defineProperty(task, 'toString', {
    writable:true,
    enumerable:true,
    configurable:true
}) // we can reset again

task.toString = 'Hi';
console.log(task.toString);


var urgenttask = Object.create(task);
Object.defineProperty(urgenttask, 'toString', {
    value: function() {
        return this.title + ' is urgent ';
    },
    writable:false,
    enumerable:true,
    configurable:true
})

console.log(urgenttask.toString());


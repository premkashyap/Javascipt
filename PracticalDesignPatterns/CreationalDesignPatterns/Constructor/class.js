'use strict' 
class Task  {
    constructor(param1) {
    this.Title= param1;
    this.Completed= false;
    }
    toString() {
        return this.Title + ' is ' + (this.Completed ?'Completed': 'Not Completed') ;
    };
    Complete() {
        this.Completed = true;
    };
};

var task1 = new Task('Task1');
var task2 = new Task('Task2');
var task3 = new Task('Task3');
task1.Complete();
task3.Complete();
console.log(task1.toString());
console.log(task2.toString());
console.log(task3.toString());
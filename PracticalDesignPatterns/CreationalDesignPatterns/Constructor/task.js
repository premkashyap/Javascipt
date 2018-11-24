var Task = function(param) {
    this.Title= param.name;
    this.Completed= false;
};

Task.prototype.toString = function(){
    return this.Title + ' is ' + (this.Completed ?'Completed': 'Not Completed') ;
};

Task.prototype.Complete = function() {
    this.Completed = true;
};

// Task.Complete = function() {   //not allowed ??. need to investigate
//     this.Completed = true;
// }
module.exports = Task;
// console.log(module.exports);
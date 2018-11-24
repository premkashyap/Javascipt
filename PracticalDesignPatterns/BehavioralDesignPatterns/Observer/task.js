var Task = function(task) {
    this.title = task.title;
    this.user = task.user;
}

Task.prototype.save = function() {
    console.log("Saving the task: " + this.title);
}

Task.prototype.complete = function() {
    console.log("Completing the task: " + this.title);
}

module.exports= Task;
var Task = function(task) {
    this.task = task
    // this.create = function() {
    //     console.log("created "+ this.task);
    // }
    
    // this.save = function(task) {
    //     console.log("saved " + this.task);
    // }
}

Task.prototype.create = function() {
    console.log("created "+ this.task);
}

Task.prototype.save = function(task) {
    console.log("saved " + this.task);
}
var legacyTask = new Task("Legacy Task");
legacyTask.create();
legacyTask.save();

var urgentTask = new Task("Urgent Task");
urgentTask.priority=2;
urgentTask.notify = function() {
    console.log("Notifying important peoples");
}
urgentTask.save = function() {
    this.notify();
    Task.prototype.save.call(this);
}

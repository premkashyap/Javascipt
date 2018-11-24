var Task = function(name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function() {
    this.complete=true;
    console.log("completed "+ this.name);
}

Task.prototype.save = function() {
    console.log("saved " + this.name);
}
var legacyTask = new Task("Legacy Task");
legacyTask.complete();
legacyTask.save();

var UrgentTask = function(name, priority) {
    this.priority = priority;
    Task.call(this, name);
}

UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function() {
    console.log("notifying important peoples");
}
UrgentTask.prototype.save = function() {
    this.notify();
    console.log("Do special stuff before saving");
    Task.prototype.save.call(this); //Todo:Why can't I do Task.save.call(this)
}
 

var urgentTask = new UrgentTask('Urgent Task:1', 1);
console.log(urgentTask);
urgentTask.complete();
urgentTask.save();
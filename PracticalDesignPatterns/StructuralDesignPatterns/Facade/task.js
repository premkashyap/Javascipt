var Task = function(task) {
    this.name= task.name;
    this.priority = task.priority;
    this.user = task.user;
    this.project = task.project;
    this.completed = false;
}

var TaskService =function () {
    return {
        complete: function(task) {
            task.completed = true;
            console.log(Task.name + " Completed ");
        },
        save: function(task) {
            console.log(Task.name + " Saved to DB");  
        },
        notifyCompletion: function(task) {
            console.log(Task.name + " Completed and notifying to user");
        }
    }
}();

var TaskServiceWrapper = function() {
    var SaveAndNotify = function(task){
        TaskService.complete(task1);
        if(task1.completed) {
            TaskService.notifyCompletion(task1);
            TaskService.save(task1);
        }
    }
    return {
        SaveAndNotify: SaveAndNotify
    }
}();

var task1 = new Task( {
    name: 'Task 1',
    priority:1,
    user:'pkashyap02',
    project: 'Machine Learning'
})

TaskServiceWrapper.SaveAndNotify(task1);


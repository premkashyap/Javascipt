var Task = function(task) {
    this.name= task.name;
    // this.priority = task.priority;
    // this.user = task.user;
    // this.project = task.project;
    // this.completed = false;
    this.flyWeight = FlyWeightFactory.get(task.priority, task.user, task.project, task.completed);
}

var FlyWeight = function(task) {
    this.priority = task.priority;
    this.user = task.user;
    this.project = task.project;
    this.completed = false;
}

var FlyWeightFactory = function(){
    var flyWeight = {};
    var get = function(priority, user, project, completed) {
        if(!flyWeight[priority+user+project+completed]) {
            flyWeight[priority+user+project+completed] = new FlyWeight(priority, user, project,completed);
        }
        return flyWeight[priority+user+project+completed];
    };
    var count= function() {
        var count=0;
        for(i in flyWeight){
            count++;
        }
        return count;
    }
    return {
        get: get,
        count : count
    }
}();


var TaskCollection = function() {
    var tasks = {}
    var count = 0;
    var addTask = function(task) {
        tasks[task.name] = new Task(task);
        count++;
    }
    var getTask = function(name) {
        return tasks[name];
    }
    var getCount = function(){
        return count;
    }
    return {
        add: addTask,
        get: getTask,
        count: getCount
    }
}

var Tasks = new TaskCollection();

var projects = ['None', 'RPD', 'CQ', 'Training']
var priorities = [1,2,3,4,5];
var completed=[true,false];
var users = ['Prem', 'Kris', 'Sunny', 'Veeraj'];

var initialMemory = process.memoryUsage().heapUsed;

for(var i=0; i<1000000;i++) {
    Tasks.add( {
        name: 'Tasks ' + i+1,
        priority: priorities[Math.floor(Math.random()*5)],
        user: users[Math.floor(Math.random()*4)],
        project: projects[Math.floor(Math.random()*4)],
        completed: completed[Math.floor(Math.random()*2)]
    }
)
}

var finalMemory = process.memoryUsage().heapUsed;

console.log('Memory Consumed ' + (finalMemory - initialMemory)/1000000 + ' MB');
console.log('Tasks created: ' + Tasks.count());
console.log("No of Flyweights: " + FlyWeightFactory.count());
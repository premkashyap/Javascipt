var Task = require('./task');

var notificationService = function() {
    var message = "Notifying ";
    this.update = function(task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
}

var loggingService = function() {
    var message = "Logging ";
    this.update = function(task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
}

var auditingService = function() {
    var message = "Auditing ";
    this.update = function(task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
}

var ObserverList = function(){
    this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
    this.observerList.push(obj);
}

ObserverList.prototype.get = function(index) {
    if(index >-1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}

ObserverList.prototype.count = function() {
    return this.observerList.length;
}

ObserverList.prototype.removeAt = function(index) {
    this.observerList.splice(index, 1);
}

ObserverList.prototype.indexOf = function(obj) {
    for(var i=0; i<this.observerList.length ;i++){
        if(this.observerList[i]===obj)
        {
            return i;
        }
    }
    return -1;
}

var ObservableTask = function(data) {
    Task.call(this, data);
    this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function(observer) {
    this.observers.add(observer);
}
ObservableTask.prototype.removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer));
}

ObservableTask.prototype.notify = function(context) {
    for(var i =0; i< this.observers.count() ; i++) {
        this.observers.get(i)(context);
    }
}

ObservableTask.prototype.save = function() {
    this.notify(this);
    Task.prototype.save.call(this,)
};



var ns= new notificationService();
var ls = new loggingService();
var as = new auditingService();

var task1 = new ObservableTask( {
    title: "RPD",
    user: "pkashyap02"
});

task1.addObserver(ns.update);
task1.addObserver(ls.update);
task1.addObserver(as.update);

task1.save();

task1.removeObserver(as.update);

task1.save();
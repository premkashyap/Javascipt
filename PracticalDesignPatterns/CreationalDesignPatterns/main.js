var Task = require('./Constructor/task');
var RepoFactory = require('./Factory/RepoFactory');
var Repos = require('./Factory/Repos');


var task2 = new Task({name:'Task2'}); //constuctor pattern
var task1 = new Task(RepoFactory.getRepo('task').get(1)); //Module Pattern
console.log(Repos);
var task3 = new Task(Repos.task.get(3));
var user1= RepoFactory.getRepo('user').get(1);
var project1 = RepoFactory.getRepo('project').get(1);

task1.user = user1;
task1.project = project1;

task1.Complete();
task2.Complete();

console.log(task1);
console.log(task1.toString());
console.log(task2.toString());

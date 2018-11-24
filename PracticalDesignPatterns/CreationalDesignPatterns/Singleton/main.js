var repo = require('./repo');
var taskHandler = require('./taskHandler');

//var repo = repo(); no need for singleton
repo.save('Hi from Main');
repo.save('Hi from Main');
repo.save('Hi from Main');

taskHandler.save();
taskHandler.save();
taskHandler.save();



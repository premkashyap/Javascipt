var repo = require('./repo')

//var repo = repo(); non singleton

var  taskHandler = function() {
    return {
        save : function() {
        repo.save('Hi From Taskhandler')
    }
}
}

module.exports = taskHandler();
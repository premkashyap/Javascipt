var TaskRepo = function () {
    var dbInitializationOrWhaterer // no body outside has access to it. so it can be used to initialize the DB

    var get = function(id) {
        console.log("getting task:" + id + " from DB");
        return {
           name: "Task:" +id
        }
    }
    var save = function() {
        console.log("saving to DB"); 
    }
    console.log('Newing up task Repo');
    return {
        get: get,
        save : save
    }

}

module.exports = TaskRepo();
// console.log(module.exports);
var ProjectRepo = function () {
    var dbInitializationOrWhaterer // no body outside has access to it. so it can be used to initialize the DB

    var get = function(id) {
        console.log("getting Project:" + id + " from DB");
        return {
           name: "Project:" +id
        }
    }
    return {
        get: get
    }

}

module.exports = ProjectRepo();
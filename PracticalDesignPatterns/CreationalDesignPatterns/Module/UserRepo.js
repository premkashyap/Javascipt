var UserRepo = function () {
    var dbInitializationOrWhaterer // no body outside has access to it. so it can be used to initialize the DB

    var get = function(id) {
        console.log("getting User:" + id + " from DB");
        return {
           name: "User:" +id
        }
    }
    return {
        get: get
    }
}

module.exports = UserRepo();

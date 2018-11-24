var RepoFactory = function() {
    this.getRepo = function(repoType) {
        switch(repoType) {
            case 'task':
            {
                if(this.taskRepo)
                return this.taskRepo;
                else {
                    this.taskRepo = require('../Module/TaskRepo');
                    return this.taskRepo;
                }
            }
            case 'user':
            {
                if(this.userRepo)
                return this.userRepo;
                else {
                    this.userRepo = require('../Module/UserRepo');
                    return this.userRepo;
                }
            }
            case 'project':
            {
                if(this.projectRepo)
                return this.projectRepo;
                else {
                    this.projectRepo = require('../Module/ProjectRepo');
                    return this.projectRepo;
                }
            }
            default:
            return;
        }
    }
}

// module.exports= RepoFactory;
// console.log(module.exports);
// module.exports = new RepoFactory;
// console.log(module.exports);
module.exports = new RepoFactory();  //This is same as new RepoFactory. no need to explicitly call the constructor factory.
// console.log(module.exports);
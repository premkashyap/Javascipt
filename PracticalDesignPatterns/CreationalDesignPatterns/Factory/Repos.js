var Repos = function() {
    var repos=this;
    var repoList = [{name:'user', source:'../Module/UserRepo'},
    {name:'project', source:'../Module/ProjectRepo'},
    {name:'task', source:'../Module/ProjectRepo'}];

    repoList.forEach(element => {
        repos[element.name]= require(element.source);        
    });
};

module.exports= new Repos;
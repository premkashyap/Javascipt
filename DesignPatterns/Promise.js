var Promise = function() {
    var data, done =[], fail =[], status = 'Progress';
    this.done = function(fn) {
        done.push(fn);
        if(status=== 'done') {
            fn(data);
        }
        return this;
    };

    this.failed = function(fn) {
        fail.push(fn);
        if(status === 'failed') {
            fn(data);
        }
        return this;
    };

    this.resolve = function(result) {
        if( status !== 'Progress') {
            throw 'Promise has already completed with a status of ' + status ;
        }

        status  = 'done'

        for(let i = 0; i < done.length; i++) {
            done[i](result);
        }

        return this;
    };

    this.fail = function(reason) {
        if( status !== 'Progress') {
            throw 'Promise has already completed with a status of ' + status ;
        }

        status  = 'fail'

        for(let i = 0; i < done.length; i++) {
            fail[i](reason);
        }
        return this;
    };
}

module.exports = Promise;
var Calc = function(start) {
    this.add = function(arg) {
        start = start+arg;
        return this;
    }
    this.subtract = function(arg) {
        start = start-arg;
        return this;
    }
    this.multiply= function(arg) {
        start = start*arg;
        return this;
    }
    this.divide = function(arg) {
        start = start/arg;
        return this;
    }
    this.equals = function(callback) {
        callback(start);
    }
    return this;
}

Calc(1).add(20).subtract(6).equals(function(arg){
    console.log(arg);
});

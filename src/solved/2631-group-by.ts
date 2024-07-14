interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    let result : Record<string, any> = {}
    this.forEach(val=>{
        let key = fn.call(this, val)
        result[key] ??  (result[key] = new Array())
        result[key].push(val)
    })
    return result;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
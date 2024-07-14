type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    
    const cache = new Map<string, number>()

    return function(...args) {
        let key = JSON.stringify(args)
        let result =  cache.get(key)  
        if(result == undefined){
            result = fn(...args)
            cache.set(key, result)
        }
        return result
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
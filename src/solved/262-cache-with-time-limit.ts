class TimeLimitedCache {
    
    private data = new Array<[number, number]>();

    constructor() {
        
    }

    set(key: number, value: number, duration: number): boolean {
        let record : [number, number]= [value, Date.now() + duration];
        let result = false;
        if(this.data[key]) {
            let [,expiredAt] = this.data[key];
            result = expiredAt < Date.now()
            
        } 
        this.data[key] = record;
        return result;
    }
    
    get(key: number): number {
        let [value, expireAt] = this.data[key];
        if(value && expireAt > Date.now() ){
            return value
        }
        return -1;
    }
    
    count(): number {
        let currentTimestamp = Date.now()
        return this.data.map((val)=>val[1]).filter((expireAt)=>expireAt>currentTimestamp).length
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
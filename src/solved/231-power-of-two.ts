function isPowerOfTwo(n: number): boolean {

    if(n<=0) return false;
    while(n % 2 === 0){
        n= n>>1
    }
    return n==1 ? true : false
    
    };
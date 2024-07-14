function minOperations(logs: string[]): number {
    let stepsToReturn = 0;
    for(let log of logs){
        if(log == './') continue
        else if(log == '../' && stepsToReturn) stepsToReturn >= 0 ? stepsToReturn : 0
        else stepsToReturn++
    }
    return stepsToReturn
};
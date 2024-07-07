function numWaterBottles(numBottles: number, numExchange: number): number {
    let result = numBottles;
    while(numBottles>=numExchange){
        let bottlesDrinked = Math.floor(numBottles / numExchange)
        result += bottlesDrinked;
        numBottles -= bottlesDrinked * (numExchange -1)
    }
    return result;
};


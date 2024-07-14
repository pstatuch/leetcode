function averageWaitingTime(customers: number[][]): number {
    let cookReadyAt = 0;
    let totalTimeWaiting = 0;
    for(let customer of  customers){
        cookReadyAt = Math.max(cookReadyAt, customer[0])
        totalTimeWaiting += cookReadyAt + customer[1] - customer[0]
        cookReadyAt  += customer[1]
    }
    return totalTimeWaiting / customers.length
};
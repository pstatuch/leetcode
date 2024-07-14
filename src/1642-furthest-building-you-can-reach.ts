function furthestBuilding(heights: number[], bricks: number, ladders: number): number {

    let laddersUsage : Record<number, number> = {}
    
    let climbToReachNext = new Array<number>()
    let prevHeight = heights[0];
    for(let i =1; i< heights.length; i++){
        let currentClimb = heights[i] - prevHeight;
        climbToReachNext.push(currentClimb > 0 ? currentClimb : 0)
        prevHeight = heights[i]
    }

    let prevClimbsCount = {}
    let canReach = 0;
    for(; canReach<climbToReachNext.length; canReach++){
        let nextClimb = climbToReachNext[canReach]
        if( nextClimb <= 0) continue
        else if( nextClimb === 1 && bricks>0) bricks--
        else{
            if(ladders > 0) {
                ladders--
                laddersUsage[nextClimb] =  laddersUsage[nextClimb] ?? 0 + 1
            }
            else if( bricks > 0) {
                bricks =  tradeOrBuyBricksForLadders(bricks, nextClimb, laddersUsage)
                if(bricks<0) break; 
            }
            else break
        }
    }
    return canReach
};
function tradeOrBuyBricksForLadders(bricks: number, currentPrice:number, ladderUsage: Record<number, number>){
    let tradeFor = 2;
    for(let tradeFor = 2; tradeFor<=Math.min(bricks,currentPrice) ; tradeFor++){
        if(ladderUsage[tradeFor] ?? 0 > 0 ){
            ladderUsage[tradeFor]--
            return tradeFor
        }
    }
    if(currentPrice <= bricks){
        return bricks-currentPrice
    }
    return -1
}


furthestBuilding([17,16,5,10,10,14,7], 74, 6)

export default furthestBuilding;
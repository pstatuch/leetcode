interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][];
}


Array.prototype.snail = function(rowsCount: number, colsCount: number): number[][] {
    if(rowsCount * colsCount !== this.length) return []
    
    let result = new Array<number[]>()

    for(let i = 0; i < this.length ; i++){
        let row = i % rowsCount
        let normalRow = Math.floor( i / rowsCount) % 2 == 0 ? row : rowsCount - 1 - row;
        result[normalRow] ?? result.push(new Array<number>())
        result[normalRow].push(this[i])
    }
    return result
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
function convert(s: string, numRows: number): string {

    if(numRows == 1 || s.length <=numRows) return s;

    let result = new Array(numRows).fill("");
    
    for(let i = 0; i<s.length; i++){
            
        let inCyclePosition = i %(2*numRows - 2);
        let distanceFromLast = numRows - 1 - inCyclePosition ;
        distanceFromLast = distanceFromLast > 0 ? distanceFromLast : -distanceFromLast;

        let rowToWrite = numRows - distanceFromLast -1;
        result[rowToWrite] = result[rowToWrite].concat(s[i])
    }
    let finalResult = "";
    for(let i = 0; i<numRows; i++){
        finalResult += result[i];
    }
    return finalResult;
};

convert("A", 1)
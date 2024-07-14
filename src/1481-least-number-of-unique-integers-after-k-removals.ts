function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    let numberCount : Record<number, number> = {}
    for(let num of arr){
        numberCount[num] = (numberCount[num] ?? 0)+1;
    }
    let sortedUniqNumbers = Object.entries(numberCount).sort((a, b)=>a[1]- b[1])
    
    let result = sortedUniqNumbers.length;
    for(let unique of sortedUniqNumbers ){
        k -= unique[1]
        if(k>=0){
            result--
        }
        else{
            break;
        }
    }
    return result;
};

findLeastNumOfUniqueInts([5,5,4],1)
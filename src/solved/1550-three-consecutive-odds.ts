function threeConsecutiveOdds(arr: number[]): boolean {
    let oddCount = 0;
    for(let i = 0; i<arr.length; i++){
        oddCount = arr[i] & 1 ? oddCount+1 : 0;
        if(oddCount == 3) return true;
    }
    return false;
};
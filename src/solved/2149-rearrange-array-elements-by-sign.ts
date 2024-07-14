function rearrangeArray(nums: number[]): number[] {
    let positives = new Array<number>()
    let negatives = new Array<number>()
    for(let num of nums){
        num>=0?positives.push(num) : negatives.push(num)
    }

    let result = new Array<number>();
    for(let i = 0; i<positives.length; i++){
        result.push(positives[i])
        result.push(negatives[i])
    }
    return result;
};
function majorityElement(nums: number[]): number {
    let major =  nums[0]
    let counter = 0;
    for(const num of nums){
        counter+= num === major ? 1: -1
        if(counter == 0){
            major = num
            counter = 1
        }
    }
    return major
};
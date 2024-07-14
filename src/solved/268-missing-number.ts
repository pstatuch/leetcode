function missingNumber(nums: number[]): number {
    let expected = nums.length/2*(nums.length+1)
    return nums.reduce( (sum, val)=>sum-val , expected)
};


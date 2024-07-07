function maxArea(height: number[]): number {
    
    let result = 0;
    let start = 0, end = height.length -1;
    
    while(start < end){
        result = Math.max( result , Math.min(height[start], height[end]) * (end-start))

        if(height[start] <= height[end]){
            start++
        }else{
            end--
        }
    }
    return result;
};
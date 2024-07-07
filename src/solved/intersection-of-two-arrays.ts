function intersect(nums1: number[], nums2: number[]): number[] {
    let nums1Sorted = nums1.sort((a,b)=>a-b);
    let nums2Sorted = nums2.sort((a,b)=>a-b);
  
      let result = new Array<number>();
    let i = 0;
    let j =0
    while(i<nums1Sorted.length && j<nums2Sorted.length){
      if(nums1Sorted[i] == nums2Sorted[j]){
          result.push(nums1Sorted[i]);
          i++; j++;
      }else if(nums1Sorted[i] < nums2Sorted[j]){
          i++;
      }else{
          j++
      }
    }  
    return result
  };
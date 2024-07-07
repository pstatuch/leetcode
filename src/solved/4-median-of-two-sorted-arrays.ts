function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const numsJoined : number[] = [];
    let i = 0 
    let j =0
    while( i<nums1.length || j <nums2.length ){
        if(i < nums1.length && j < nums2.length){
            numsJoined.push(nums1[i] < nums2[j] ? nums1[i++] : nums2[j++])
        }else if(i>= nums1.length){
            numsJoined.push(nums2[j++])
        }else{
            numsJoined.push(nums1[i++])
        }
    }

    if( numsJoined.length % 2 == 1 ){
        return  numsJoined[(numsJoined.length-1)/2]
    }else{
        return  (numsJoined[numsJoined.length/2] + numsJoined[numsJoined.length/2-1])/2;
    }
};

console.log(findMedianSortedArrays([1,2], [3,4]))
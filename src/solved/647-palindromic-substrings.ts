function countSubstrings(s: string): number {
    let result = 0;
    let chars = s.split('')
    for(let index = 0; index <= chars.length-1; index += 0.5){
        let left = Math.floor(index)
        let right = Math.ceil(index)
        while(left >=0 && right < chars.length && chars[left] == chars[right] ){
            result++
            left--
            right++
        }
    }
    return result;
};
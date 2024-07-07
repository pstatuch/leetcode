function lengthOfLongestSubstring(s: string): number {
    //let lastSeenAt : Record<string, number> = {};
    // to bylo ogolnie wolniejsze od mapy
    let lastSeenAt = new Map<string, number>()
    
    let maxLength = 0, substringStart = 0;

    for(let i = 0; i<s.length; i++){
        let currentChar = s[i], lastIndex = lastSeenAt.get(currentChar); 

        if(lastIndex != undefined){
            substringStart = Math.max(substringStart, lastIndex+1)
        }
        lastSeenAt.set(currentChar, i);
        maxLength = Math.max(maxLength, i-substringStart+1);
    }
    return maxLength;
};
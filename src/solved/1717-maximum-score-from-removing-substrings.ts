function maximumGain(s: string, x: number, y: number): number {
    let result = 0
    for(let word of divide(s)){
        result += calculateGain(word, x, y)
    }
    return result
};

function calculateGain(s: string, x:number, y: number){
    
    // prefere ab-s
    let aCount = 0
    let bCount = 0
    let abCount = 0
    let baCount = 0;


    for(let char of s.split("")){
        if(char == 'a') {
            aCount++
            if( bCount > baCount) baCount++
        }
        else{
            bCount++
            if( aCount > abCount) abCount++     
        }
    }
    let maxPairs = Math.min(aCount, bCount);
    
    return Math.max(
        abCount*x + (maxPairs-abCount)*y,
        baCount*y + (maxPairs-baCount)*x
    )

    // prefere ba-a
}

function divide(s: string){    
    let result = Array<string>()
    let currentWord = ""
    for( let char of s.split("")){
        if(char === 'a' || char ==='b'){
            currentWord += char
        }
        else{
            if(currentWord.length >0) result.push(currentWord)
            currentWord = ""
        }
        
    }
    result.push(currentWord)
    return result;
}
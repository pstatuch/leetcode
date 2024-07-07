
function intToRoman(num: number): string {
    
    let getNeerestRomanSymbol : (n: number) => [string, number] = (n)=>{
        let symbols : Array<[string, number]>= [["I", 1], ["V",5], ["X",10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]

        let leadingDigit = n;
        while(leadingDigit > 10 ){
            leadingDigit = (leadingDigit - leadingDigit%10)/10;
        }
    
        if(leadingDigit === 4 || leadingDigit == 9){
            if(n < 10) return ['I', -1]
            if(n< 100) return ['X', -10]
            if(n<1000) return ['C', -100] 
        }
        for(let i = symbols.length-1; i>0; i--){
            if(symbols[i][1] <= n) return symbols[i];
        }
        return symbols[0];
    }

    if(num === 0) return "";
    
    let [nextSymbol, nextValue] = getNeerestRomanSymbol(num);
    
    return nextSymbol[0].concat(intToRoman(num-nextValue))

};

intToRoman(19)
function romanToInt(s: string): number {
    let symbolToValue = {
        "I":1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let prevSymbolVal  = 1
    let result = 0;
    for(let i = s.length -1 ; i>=0; i--){
        let currentSymbolVal = symbolToValue[s[i]]
        result += currentSymbolVal >= prevSymbolVal? currentSymbolVal : -currentSymbolVal;
        prevSymbolVal = currentSymbolVal;
    }
    return result;
    
};
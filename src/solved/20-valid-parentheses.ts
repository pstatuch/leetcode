function myAtoi(s: string): number {
    let value = "";
    let acceptLeadingSpace = true
    let acceptSigne = true
    let isDigit = new RegExp("[0-9]")
  
    for(let char of s.split("")){
      if(isDigit.test(char) || ( (char === '-' || char === '+') && acceptSigne ) ){
          acceptLeadingSpace = acceptSigne = false
          value  += char
      }
      else if(char === ' ' && acceptLeadingSpace ) continue
      else break
    }
    return Math.max(Math.min(parseInt(value) || 0, 2147483647), -2147483648)
  };
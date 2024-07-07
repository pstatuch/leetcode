function isPalindrome(x: number): boolean {
  
    let xPolindrom = 0;
    let tmp = x; 
    while(tmp>0){
        xPolindrom*=10;
        let lastDigit = tmp%10;
        tmp=(tmp-lastDigit) /10
        xPolindrom += lastDigit;
    }
    return x === xPolindrom;
};

isPalindrome(121)
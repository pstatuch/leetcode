function reverse(x: number): number {

    const isNegative = x<0
    x = isNegative ? -x : x

    let reverse = 0;
    while( x > 0 ){
        reverse*=10
        let lastDigit =x % 10 
        reverse  += lastDigit
        x = (x - lastDigit) / 10
    }

    reverse = isNegative ? -reverse : reverse
    return -2147483648 <= reverse && reverse <= 2147483647 ? reverse : 0
};
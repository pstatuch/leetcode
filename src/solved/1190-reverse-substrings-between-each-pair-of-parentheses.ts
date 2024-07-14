function reverseParentheses(s: string): string {
    let map = Array<[number, number]>();
    let stack = new Array<number>()

    let chars = s.split('');
    for(let i = 0; i<s.length; i++){
        if(chars[i]==='(')
            stack.push(i)
        else if(chars[i]===')')
            map.push([stack.pop()!, i])
    }

    let otherEnd = function (value : number, char: string) : number{
        let index = char==='(' ? 0 : 1
        return map.find( (pair)=>pair[index] == value  )![1-index]
    }

    let direction = 1;
    let result = new Array<string>()
    for(let i = 0; i<s.length; i+=direction){
        let char = chars[i]
        if(chars[i] == '(' || chars[i] == ')'){
            i = otherEnd(i, char)
            direction = -direction
        }
            else{
            result.push(char)
        }
    }
    return result.join("")
};

reverseParentheses( "(abcd)" )
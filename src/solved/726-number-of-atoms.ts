function countOfAtoms(formula: string): string {
    let atoms = formula.split("")
    let multipliers = new Array<number>();
    let multiplier = ""
    let atom = ""

    let register = new Map<string, number>()

    for(let i = atoms.length-1; i>=0; i--){
        let char = atoms[i]
        if(isDigit(char)){
            multiplier = char+multiplier
        }
        else if(char == "("){
            multipliers.pop()
        }
        else if (char == ')'){
            multipliers.push(toInt(multiplier))
            multiplier = ""
        }
        else if (isLowerCase(char)){
            atom = char+atom
        }else{
            atom = char+atom
            let amount = calculateMultiplier(multiplier, multipliers)
            register.set(atom, (register.get(atom) ?? 0)+amount) 
            multiplier = ""
            atom = ""          
        }
    }
    let result =  formatResult(register)
    return result
};

function calculateMultiplier (single : string, group : number[]){
    return group.reduce((mul, elem)=>mul*elem, 1) * (toInt(single) || 1)
}
function toInt(text : string){
    return text.length > 0 ? Number.parseInt(text) : 1;
}

function isLowerCase(char : string){
    return char === char.toLowerCase()
}

function isDigit (char : string){
    return (new RegExp('[0-9]')).test(char)
}

function formatResult(input : Map<string, number>){
    return  Array.from(input.keys()).sort().reduce((result, atom)=>{let amount =input.get(atom); return result+=atom+ ( amount! > 1 ? amount : "")}, "");
}
console.log(countOfAtoms(
    "Mg(H2O)N"
))


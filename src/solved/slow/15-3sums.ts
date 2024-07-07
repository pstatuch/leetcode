// na to jest bardziej eleganckie rozwiazanie przyjmujemy wartosc srodkowa i ustawiamy 2 indeksy na 1 i 3-ci element
// jeli suma jest za duza to zmiejszamy indeks 3 jak za malo do zwiekszamy indeks 1-go.
// wwolnym czasie zaimplementuj.
// ZMIANA PLANOW jest inne zadanie 16. 3Sum closes - podobne ale troszke trudniejsze.
// chyba da sie je rozwiazac w ten sam sposob.
function threeSum(nums: number[]): number[][] {
    
    let doesExist = (from: number[], val: number, start: number, end: number) =>{
        
        while(end-start >= 2){

            let mid = Math.floor((start + end) / 2) 
            if(from[mid] == val){
                return true
            }else if( from[mid] < val ){
                start = mid+1
            }else{
                end = mid -1
            }
        }
        return from[start] == val || from[end] == val
    }

    let result = new Array<[number, number, number]>();
    
    if (nums.length<=2 ) return [];
    
    nums.sort((a,b)=>a-b);

    for(let first = 0; first <= nums.length - 3; first++){
        for(let second = first+1; second <= nums.length -2; second++){
            let current2Vals = nums[first] + nums[second];
            if(current2Vals + nums[nums.length-1] < 0 || current2Vals + nums[second+1] > 0) continue
            if(doesExist(nums, -current2Vals, second+1, nums.length-1)){
                let tuplet : [number, number, number]=  [nums[first], nums[second], -current2Vals] 
                if(result.find((v, i, arr) => v[0] == tuplet[0] && v[1] == tuplet[1]) == undefined){
                    result.push(tuplet)
                }
            }

        }
    }
    return result
};

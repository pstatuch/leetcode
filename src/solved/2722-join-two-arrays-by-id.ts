type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    let result = arr1.sort((a,b)=>a.id - b.id)
    let remaining = new Array<ArrayType>();
    for(let item of arr2){
        // find index by id
        let index = findIndexInSortedArray(item.id, result);
        if(index >=0){
            result[index] = {...result[index], ...item}
        }
        else remaining.push(item)
    }
    return [...result, ...remaining].sort((a,b )=>a.id - b.id);
};
function findIndexInSortedArray(id : number, array : ArrayType[]){
    let start = 0, end = array.length -1;
    while( start < end ){
        let middle = Math.floor((start + end )/2)
        let middleId = array[middle].id
        if(middleId === id) return middle
        if(middleId > id) end = middle -1
        else start = middle +1
    }
    return array[start].id === id ? start : -1
}

join([{"id": 1,"x": 2,"y": 3},{"id": 2,"x": 3,"y": 6}], [{"id": 2,"x": 10,"y": 20},{"id": 3,"x": 0,"y": 0}])
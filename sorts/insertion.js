function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentValue = arr[i];
        for(var j = i-1; j >= 0 && arr[j]>=currentValue; j--){//var-t használok, hogy a j elérhető legyen a cikluson kívül is
            //[arr[j], arr[j+1]] = [arr[j+1], arr[j]]; így is működik, de több lesz a csere
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

console.log(insertionSort([-3,-2, -10, 4,7,2,23,12,7,-23]));


function insertionTest(arr){
    for(let i = 1; i<arr.length; i++){
        let currentValue = arr[i];
        for(var j=i-1; j>=0 && currentValue <= arr[j];  j--){
    
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            } 
                arr[j+1] = currentValue;
        
    }
    return arr;
}
console.log(insertionTest([-2,-3, -10, 4,7,2,23,12,7,-23]));
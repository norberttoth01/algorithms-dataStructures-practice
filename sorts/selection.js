function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        let minIndex = i;
        for(let j =i+1; j<arr.length; j++){
            if(arr[j] < arr[i]){
                minIndex = j;
            }
        } 
        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort([-3,-2, -10, 4,7,2,23,12]));
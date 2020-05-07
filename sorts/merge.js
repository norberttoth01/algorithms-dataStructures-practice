function merge(arr1, arr2){
    let i= 0;
    let j= 0;
    let result = [];

    while(arr1.length > i && arr2.length > j  ){
        if(arr1[i] > arr2[j]){
            result.push(arr2[j]);
            j++;
        }
        else {
            result.push(arr1[i]);
            i++;
        }
    }
    while(arr1.length> i ){
        result.push(arr1[i]);
        i++
    }
    while(arr2.length> j ){
        result.push(arr2[j]);
        j++
    }
    return result;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let midIndex = Math.floor(arr.length /2 );
    let left = mergeSort(arr.slice(0, midIndex));
    let right =mergeSort(arr.slice(midIndex));

    return merge(left, right);

}

console.log(mergeSort([-10,-101, -32, 2, 10, 3, 4, 54, 32]));
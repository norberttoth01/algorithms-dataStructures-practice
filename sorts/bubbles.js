function bubbleSort(arr){
    let swap;
    for(let i=0; i < arr.length-1; i++){ //amikor a 2. elem a helyére kerül, akkor az azt jelenti, hogy máar az első is a helyén van, ezért 8 elem esetén csak 7 iteráció kell
         swap = false; 
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]> arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swap = true;
            }
        }
        if(!swap){ 
            break;
        } 
        console.log(arr);
    }
    return arr;
}

console.log(bubbleSort([-10, -11, -4,-7,3,7,1,2,5,6,8]));


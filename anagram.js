function testAnagram(first, second){
   if(first.length !== second.length){
       return false;
   }
    const lookup = {};

    for(let char of first){
        lookup[char] = lookup[char] + 1 || 1;  
    }
    
    for(let char of second){
        if(!lookup[char]){
            return false;
        }
        --lookup[char]
    }
    return true;
}

console.log(testAnagram('alma', 'malaa'))
console.log(testAnagram('korte', 'mala'))

console.log('alma korte !'.replace(/[^\w\d]/g, ''));
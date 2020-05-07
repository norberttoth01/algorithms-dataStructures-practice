function pal(str){
    const strArray =[...str];
    let length = strArray.length;
	let halfLength = Math.floor(length/2);
    
	for(let i = 0; i <halfLength; i++){
        if(strArray[i] !== strArray[length-i-1]){
            return false;
        }
        
    }
    return true;

}
console.log('abba',pal('kabbak'));
console.log('cnkjdnk',pal('ettek'));

function pal2(str){
    return [...str].every(
        (char, i)=> char === str[str.length-i-1]
        )
}

console.log('abba pal2',pal2('kabbak'));
console.log('cnkjdnk pal2',pal2('ettek'));
function stringReverse1(str){
	let strArray = [...str];
	return strArray.reverse().join('');
	// return [...str].reverse().join('');
}

console.log(stringReverse1('alma'));


function strRev2(str){
	const strArray = str.split('');
	return strArray.reverse().join('');
}

console.log(strRev2('alma'));


function strRev3(str){
	let result ='';

	for(let char of str){
		result = char + result;
	}
	return result;
}

console.log(strRev3('körte'));


function strRev4(str){
	let strArray = [...str];
	let length = strArray.length;
	let halfLength = Math.floor(length/2);

	for(let i = 0; i <halfLength; i++){
		[strArray[i], strArray[length-i-1]]=[strArray[length-i-1],strArray[i]]
	}
	return strArray.join('');
}

console.log(strRev4('haliho'));

function strRev5(str){
	return [...str].reduce((reversedStr, char)=> char + reversedStr, '');
}

console.log(strRev5('kismaci'));
console.log(strRev5(strRev5('kismaci')));
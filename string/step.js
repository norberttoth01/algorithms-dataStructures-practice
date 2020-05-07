function step(num){
    let str=""
    for(let i = 0; i< num; i++){
        
        str+='*'.repeat(i+1) + ' '.repeat(i+1) +"\n";
    }
    return str;
}

console.log(step(5)); 


function recStp(num, row=1){
    if (num < row){
        return;
    } 
    let str ='*'.repeat(row) + ' '.repeat(num-row);
    console.log(str);
  return  recStp(num, row+1);
}
recStp(10);

const obj = {};
const arr=[1,2,3];
obj[arr]='test is working';
arr2=[1,2,3];
console.log(obj[arr2]); 
console.log(Object.keys(obj));

function test(a,b,c){
    console.log(a,b,c)
}

test(...[1,2,4]);
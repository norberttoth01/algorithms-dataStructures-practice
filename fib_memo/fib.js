function slowFib(n){
    if(n<2){
        return 1;
    }
    return fastFib(n-1) + fastFib(n-2);
}
function slowFib2(n){ //meghíváskor ez már a memo-nak átadott fn lesz így nems lesz ütközés a belső slowFib-2vel, ami a memo visszatérési értéke;
    if(n<2){
        return 1;
    }
    return slowFib2(n-1) + slowFib2(n-2);
}
// console.time('fib');
// console.log(slowFib2(100));
// console.timeEnd('fib');

function memo(fn){
    const cache={};

    return function(...arg){
        if(cache[arg]){
            console.log('ujra fur', cache[arg]);
            return cache[arg];
        }
        const result = fn(...arg);
        console.log('elso fut', result);
        
        cache[arg]=result;
        return result;
    }
}

const fastFib= memo(slowFib);

console.time('fastfib');
console.log(fastFib(200));
console.timeEnd('fastfib'); 


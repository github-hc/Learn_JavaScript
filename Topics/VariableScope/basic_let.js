let y;
function main(){
console.log('basic_let1: '+ y);

y = 1;
console.log('basic_let2: '+ y);

function testFunc(){
    console.log('basic_let3: '+ y);
    {
    y=90;
    }
    console.log('basic_let4: '+ y);
}

console.log('basic_let5: '+y);
testFunc();
console.log('basic_let6: '+y);
}

console.log('basic_let7: '+y);
main();
console.log('basic_let8: '+y);
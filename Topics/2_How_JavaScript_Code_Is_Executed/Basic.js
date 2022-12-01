/*
It is done in two phases
1) Memory Creation
2) Code Execution

here
1) n: undefined
2) square: fcn definition
3) square2: undefined
4) square4: undefined

1.1) n:2
now 3) is executed so it goes inside square function and
again memory creation + code execution is done

same happens with 4)

Call Stack??
*/

var n = 2;
function square(num){
    var ans = num * num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);
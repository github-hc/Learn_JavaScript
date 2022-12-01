var x;
function main() {
    console.log('basic_var1: ' + x);

    x = 1;
    console.log('basic_var2: ' + x);

    function testFunc() {
        console.log('basic_var3: ' + x);

        x++;

        console.log('basic_var4: ' + x);
    }

    console.log('basic_var5: ' + x);
    testFunc();
    console.log('basic_var6: ' + x);
}

console.log('basic_var7: ' +x);
main();
console.log('basic_var8: ' +x);
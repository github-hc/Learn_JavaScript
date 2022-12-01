/*
Function bundled together with its surrounding state (Lexical Environment)
When functions are returned from another function, they still remember their lexical scope
Lexical scope = In  Hierarchy or In Order
Local scope + Lexical environment of its parent
child2 has access to the variables of child1 and parent
*/

function parent() {
    let a = 10;

    function child() {
        console.log(a);
    }

    return child;
}

const z = parent();
z();//Here 'a' is not in the global scope but still it will print 10. Reason: When functions are returned from another function, they still remember their lexical scope
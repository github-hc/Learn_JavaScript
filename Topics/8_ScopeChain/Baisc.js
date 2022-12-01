//Lexical Env = local memory + lexical env of its parent
//when a variable is not found inside a function then it tries to search that on next level (Its lexical parent),
//This chain is called as scope chain
//C() is lexically inside a() || a() is lexical parent of c()
//a() is lexically inside global

// function a(){
//     console.log(b);
// }

// var b = 10;
// a();


function a(){
    c();
    function c(){
        console.log(b);
    }
}

var b = 10;
a();
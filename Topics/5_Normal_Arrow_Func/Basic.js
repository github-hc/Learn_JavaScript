let getData = function(){
    console.log(this)
    this.id = 1,
    this.name = 'test1'
}

let getData1 = () =>{
    console.log(this)
    this.id = 1,
    this.name = 'test1'
}

let obj1 = new getData();
let obj2 =  getData1;

console.log(obj1.id+', '+ obj1.name);
console.log(obj2.id+', '+ obj2.name);
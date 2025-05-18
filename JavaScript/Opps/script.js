// let obj = {
//     a : 1,
//     b : " kunal "
// }
// console.log(obj);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

class Animal{
    constructor(name){
        this.name = name;
        console.log(" obj is created"); 
    }
    eats(){
        console.log('kha raha hu');
    }
    jumps(){
        console.log('kud raha hu');
    }
}
class lion extends Animal {
    constructor(name){
        super(name)
        console.log(" obj is created and he is lion........"); 
    }
}
let a = new Animal("bunny");
console.log(a);

let l = new lion("shera");
console.log(l)
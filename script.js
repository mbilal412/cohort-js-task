// function delayMessage(msg, time) {
//     setTimeout(() => {
//         console.log(msg);
//     }, time);
// }

// delayMessage("hello ", 3000)


// function repeat(fn, n) {
//     for (let i = 0 ; i<n; i++){
//         fn();
//     }
// }

// repeat(function(){console.log("hello")}, 5)


// function createCounter(){
//     let counter = 0
//     return function(){
//         counter++
//         console.log(counter);
//     }
// }
// let outer = createCounter()
// outer();
// outer();
// outer();
// outer();



// function createUser(name){
//     return function(){
//         console.log(name)
//         name = "hello";
//         console.log(name)
//     }
// }

// (createUser('bilal'))();



// function calculateTotal(cart){
//     let total = cart.reduce((acc, item) =>{
//         return item.price+acc;
//     },0);

//     return total;
// }

// const products = [
//   { name: "Medicine A", price: 120, quantity: 5 },
//   { name: "Medicine B", price: 250, quantity: 2 },
//   { name: "Medicine C", price: 90,  quantity: 10 },
//   { name: "Medicine D", price: 300, quantity: 1 },
//   { name: "Medicine E", price: 150, quantity: 7 }
// ];

// console.log(calculateTotal(products));


// function calculateTotal(cart){
//     let total = cart.filter((user) =>{
//         if (user.age>18)
//         return user;
//     },0);

//     return total;
// }
// const products = [
//   { name: "Medicine A", price: 120, age: 5 },
//   { name: "Medicine B", price: 250, age: 22 },
//   { name: "Medicine C", price: 90,  age: 19 },
//   { name: "Medicine D", price: 300, age: 19 },
//   { name: "Medicine E", price: 150, age: 7 }
// ];

// console.log(calculateTotal(products));



// function calAvg(...arr){
    
//     let total = arr.reduce((acc, marks)=>{
//         return acc + marks;

//     },0);
//     console.log(typeof(total))
//     return total/arr.length;
// }


// console.log(calAvg(23,21,41,12,23));



let arr = ["alyan","ali", "Ibrahim", "Zara", "ahmed", "asim", "umer"];

console.log((arr.filter(name=>{
    return name[0]==='a';
})).map(name => {
    return name.toUpperCase()
}).sort().join(" ") .split('A'));



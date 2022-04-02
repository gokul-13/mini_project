//promise chaining

// const obj=new Promise(function(resolve,reject){
//         resolve(1);
// })


// obj1=obj.then((val)=>{
//     console.log('value1')
//     return 2;
// })

// obj2=obj1.then((val)=>{
//     console.log(val);
// })

// Generators

// function* createNumbers() {
//     for(let i=0;i<10;i++) yield i;
// }

// function* newGen() {
//     yield* createNumbers();
//     yield* createNumbers();
// }

// let obj=newGen();
// console.log(JSON.stringify(obj.next()))
// console.log(JSON.stringify(obj.next()))

// function* check() {
//     let a=yield "a";
//     console.log(a);
//     let b=yield "b";
//     console.log(b);
// }

// let obj=check();
// console.log(obj.next().value);
// console.log(obj.next(5).value);


// Prototypes

// let animal={
//     name:'General animal',
//     setName() {
//         this.name="Blue animal"
//     }
// }

// let zebra={
//     __proto__:animal,
// }
// console.log(Object.keys(zebra));
// console.log(zebra.name);
// zebra.setName();
// console.log(zebra.name);
// console.log(Object.keys(zebra));

//Promise.all

(async function check() {

 const f1=new Promise((resolve,reject)=>{
    setTimeout(resolve(1),2000);
})

const f2=new Promise((resolve,reject)=>{
    setTimeout(resolve(2),2000);
})

const f3=new Promise((resolve,reject)=>{
    setTimeout(resolve(3),2000);
})

const val=await Promise.all([f1,f2,f3]);
console.log(val)
})()


//async function search() {

//     await setTimeout(()=>{console.log("Done")},3000);
// }

// search();


// const promise=new Promise((resolve,reject)=>{
//     setTimeout(resolve(10),3000);
// });

// promise.then((res)=>{console.log(res)})

console.log("End");
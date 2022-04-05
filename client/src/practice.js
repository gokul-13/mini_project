//spread Syntax

// function Student(name,age,gender) {
//     this.name=name;
//     this.age=age;
//     this.gender=gender;
//   }
  
//   const obj=new Student('gk',21,'Male');
//   console.log(obj)
//   const obj1= {...obj,type:'introvert'}
//   console.log(obj1)

//---------------------------

//Destructuring

// const obj={
//     namei:'gk',
//     age:20,
//     home: 'chennai',
//     course:{
//         name: 'B.E',
//         division: 'CSE'
//     }
        
//  }

//  const {namei:firstName, course:{division:branch}} = obj;
//  console.log(firstName);
//  console.log(branch)

//  const arr=[1,2,3,4,5];
//  const [one,...rest]=arr;
//  console.log(one,rest);



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

// (async function check() {

//  const f1=new Promise((resolve,reject)=>{
//     setTimeout(resolve(1),2000);
// })

// const f2=new Promise((resolve,reject)=>{
//     setTimeout(resolve(2),2000);
// })

// const f3=new Promise((resolve,reject)=>{
//     setTimeout(resolve(3),2000);
// })

// const val=await Promise.all([f1,f2,f3]);
// console.log(val)
// })()


//async function search() {

//     await setTimeout(()=>{console.log("Done")},3000);
// }

// search();


// const promise=new Promise((resolve,reject)=>{
//     setTimeout(resolve(10),3000);
// });

// promise.then((res)=>{console.log(res)})


//--------Prototypes



// const phone ={
//     brand:'Samsung',
//     network: '4G',
//     screen: "6 inch"
// }
// const S21={
//     model:"S21 Ultra",
//     network:'5G'
// };
// S21.__proto__=phone;
// console.log(S21.__proto__);
// console.log(S21.brand);
// console.log(S21.network)
// S21.screen="7 inch";
// console.log(S21);
// console.log(S21.__proto__.screen);

// //-----

// function CreateObj() {
//     this.name='gk',
//     this.age=21;
        // return {}
// }

// const obj=new CreateObj();
// console.log(obj);

// console.log("End");


function check() {
    let name="hk";

    function dummy() {
        console.log(this.name);
    }
    dummy();
    console.log(name);
}
check();
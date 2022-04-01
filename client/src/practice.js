const obj=new Promise(function(resolve,reject){
        resolve(1);
})

obj1=obj.then((val)=>{
    console.log('value1')
    return 2;
})

obj2=obj1.then((val)=>{
    console.log(val);
})

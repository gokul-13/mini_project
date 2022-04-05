const amqp=require('amqplib');

const push_data=(_data)=>{

    return new Promise((resolve,reject)=>{
        amqp.connect('amqp://localhost:5672').then(async (val)=>{
            val.createChannel().then(async (channel)=>{
               const queue='student';
               const msg=_data;
               channel.assertQueue(queue,{durable:false});
               channel.sendToQueue(queue,Buffer.from(msg));
               resolve(1);
           }).catch((error)=>{
               reject(1);
           })
       }).catch((val)=>{
           console.log(val);
       })
    });  
}

module.exports=push_data;

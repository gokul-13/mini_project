const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.json());

const amqp=require('amqplib');


app.get('/',async (req,res)=>{
    await amqp.connect('amqp://localhost:5672').then(async (val)=>{
        await val.createChannel().then(async (channel)=>{
            const queue='start';
            const msg='Hello world';
            channel.assertQueue(queue,{durable:false});
            channel.sendToQueue(queue,Buffer.from(msg));
        }).catch((error)=>{
            console.log('Error occured on Channel creation');
        })
    }).catch((val)=>{
        console.log(val);
    })
    return res.send('Hello');
})

app.listen(8068);

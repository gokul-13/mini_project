const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.json());

const amqp=require('amqplib');

const elastic=require('elasticsearch');
const connection=elastic.Client({
    host:'localhost:9200'
});


app.get('/',async (req,res)=>{
    await amqp.connect('amqp://localhost:5672').then(async (val)=>{
        await val.createChannel().then(async (channel)=>{
            const queue='student';
            //const msg='Hello world';
            channel.assertQueue(queue,{durable:false});
            channel.consume(queue,(msg)=>{
            console.log(JSON.parse(msg.content));
            channel.ack(msg);

            connection.index({
                index:'student',
                body: JSON.parse(msg.content)
            }).then((resolved)=>{
                res.send("Addition Success");
            }).catch((reject)=>{
                console.log(reject);
                res.send("error");
            })
            console.log("End of function")
        
        
        })
        }).catch((error)=>{
            console.log('Error occured on Channel creation');
        })
    }).catch((val)=>{
        console.log(val);
    })
    return res.json("See Console");
})

app.listen(8069);

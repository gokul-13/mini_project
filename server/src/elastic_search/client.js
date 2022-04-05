const app=require('express')();
const bodyparser=require('body-parser')

const elastic=require('elasticsearch');
const connection=elastic.Client({
    host:'localhost:9200'
});

connection.ping({
        requestTimeout: 1000
    }, function (error) {
        if (error) {
            console.trace('elasticsearch cluster is down!');
        } else {
            console.log('All is well');
        }
});

app.use(bodyparser.json());
app.post("/",(req,res)=>{
    connection.index({
        index:'studentrecord',
        body: req.body
    }).then((resolved)=>{
        res.send("Addition Success");
    }).catch((reject)=>{
        console.log(reject);
        res.send("error");
    })
    console.log("End of function")
   
})

app.get('/data/:id',(req,res)=>{

    connection.get({
        index:'studentrecord',
        id:req.params.id
    }).then((result)=>{
        console.log(result);
        res.json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(404).send("Faield");
    })
})

app.get('/search',(req,res)=>{
    connection.search({
        index:'studentrecord',
        q:'male'
    }).then((rest)=>{
        res.json(rest);
    }).catch((err)=>{
        console.log(err);
    })
})
app.listen(8080);
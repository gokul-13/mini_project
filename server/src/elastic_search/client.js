const app=require('express')();
const bodyparser=require('body-parser')

const elastic=require('elasticsearch');
const { password } = require('pg/lib/defaults');
const connection=elastic.Client({
    host:'127.0.0.1:9200'
},
{
    username:'elastic',
    password:'changeme'
}
)

app.use(bodyparser.json());
app.post("/",(req,res)=>{
    connection.index({
        index:'studentNames',
        body: req.body
    }).then((resolved)=>{
        res.send("Addition Success");
    }).catch((reject)=>{
        res.send("error");
    })
    console.log("End of function")
   
})
app.listen(8080);
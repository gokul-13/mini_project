const  express=require('express');

const allconn=require('./database.js');
const conn=allconn.con;
const redisClient=allconn.redisClient;

const router= express.Router();






router.get('/',(req,res)=>{
    try {
         redisClient.exists("student").then(async (val)=>{
             if(val===1) {
                 console.log("Cache Hit");
                 await redisClient.get('student').then(async (value)=>{
                     res.header('Access-Control-Allow-Origin','*');
                     res.json({student:JSON.parse(value)});
                 });
             }
             else {
                 console.log('Cache Miss');
                 const records=await conn.query('SELECT * FROM student');
                 await redisClient.setEx('student',60,JSON.stringify(records.rows));
                 await redisClient.get('student').then((value)=>{
                    res.header('Access-Control-Allow-Origin','*');
                    res.json({student:JSON.parse(value)});
                 });
             }
         });
    }
    catch(err) {
        console.log(err);
    }
})

router.get('/detail/:id',async (req,res)=>{

    const results= await conn.query('SELECT * from student where id=$1',[req.params.id]);
    if(results.rows.length===0)  res.send("No records Found");
    else {
        res.send(results.rows);
    }
})



router.post('/add',async (req,res)=>{
    try {
        const obj=req.body;
        console.log(obj);
    const ret=await conn.query('INSERT INTO student(id,name,email) VALUES($1,$2,$3)',[obj.id,obj.name,obj.email]);
    res.header('Access-Control-Allow-Origin','*')
    res.json({status:'success'});
    } catch (error) {
        console.log(error);
        res.header('Access-Control-Allow-Origin','*')
        res.json({status:'failure'});

    }
});


router.post('/addMark',async(req,res)=>{

    try {
        const obj=req.body;
        console.log(obj);
        for(let i=0;i<obj.marks.length;i++) {
            const ret=await conn.query('INSERT INTO marks VALUES($1,$2,$3)',[obj.id,obj.marks[i],obj.courseid[i]]);
        }
        res.json("Inserted Succcesfully");
    } catch (error) {
        console.log(error);
    }
    
});


module.exports=router;


const  express=require('express');

const allconn=require('./database.js');
const rabbit_p=require('./RabbitMq_P.js')
const conn=allconn.con;
const redisClient=allconn.redisClient;

const router= express.Router();


async function updateCache() {
    console.log("Got here");
    const data_updated=await conn.query('SELECT * from student');
    redisClient.setEx('student',60,JSON.stringify(data_updated.rows));
    console.log("Cache Updated");
}





router.get('/',(req,res)=>{
    try {
         redisClient.exists("student").then(async (val)=>{
             if(val===1) {
                 console.log("Cache Hit");
                 await redisClient.get('student').then(async (value)=>{
                     res.json({student:JSON.parse(value)});
                 });
             }
             else {
                 console.log('Cache Miss');
                 const records=await conn.query('SELECT * FROM student');
                 await redisClient.setEx('student',60,JSON.stringify(records.rows));
                 await redisClient.get('student').then((value)=>{
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
    if(results.rows.length===0)  res.json([]);
    else {
        res.send(results.rows);
    }
})



router.post('/add',async (req,res)=>{
    try {
        const obj=req.body;
        rabbit_p(JSON.stringify(req.body)).then((res)=>{
            if(res===1) console.log("Data Added to queue");
            else {
                console.log("Failed");
            }
        }).catch(err=>{
            console.log(err);
        })
    console.log(obj);
    const ret=await conn.query('INSERT INTO student(id,name,email) VALUES($1,$2,$3)',[obj.id,obj.name,obj.email]);
    updateCache();
    res.json({status:'success'});
    } catch (error) {
        console.log(error);
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

router.get('/view/:id',async (req,res)=>{
    try {
        console.log("Got id:"+req.params.id);
        const name_data=await conn.query('SELECT name from student where id=$1',[req.params.id]);
        const results=await conn.query('SELECT m.course_id,c.name cname,m.mark FROM student s,marks m,courses c WHERE s.id=m.student_id AND s.id=$1 AND c.id=m.course_id;',[req.params.id]);
        if(results.rows.length===0){
            res.json({status:'no_records_found'});
        }
        else {
            res.json({status:'success',name:name_data.rows[0].name,value:results.rows});
        }
    }catch(err) {
        console.log(err);
        res.json({status:'failure',data:[]})
    }
})

router.delete('/delete/:id',async (req,res)=>{
    console.log("Delete hit");
    const sid=req.params.id;
    console.log(sid);
    try {
    const result=await conn.query("DELETE FROM student WHERE id=$1 RETURNING *",[sid]);
    console.log(result);
    if(result.rowCount==1) {
        res.json({status:"success"});
        updateCache();
    }
    else {
        res.json({status:'failure'});
    }
    }catch(err) {
        res.json({status:'failure'});
    }

})

module.exports=router;


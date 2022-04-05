const express=require('express');
const router=express.Router();

const {con} =require('./database.js');


router.post('/add',async (req,res)=>{
    try {
    const results=await con.query('INSERT INTO marks(student_id,mark,course_id) values($1,$2,$3)',[req.body.sid,req.body.mark,req.body.cid])
    console.log(results);
    if(results.rowCount===1) {
        res.json({status:'success'});
    }
    else {
        res.json({status:'failure',message:"Record Exists! You need to update"});
    }
    }catch(err) {
        res.json({status:'failure',message:"Record exists! You need to update"});
    }
})

router.put('/update/:sid/:cid/:mark',async (req,res)=>{
    const results=await con.query('UPDATE marks SET mark=$1 WHERE student_id=$2 AND course_id=$3',[req.params.mark,req.params.sid,req.params.cid]);
    console.log(results);
    if(results.rowCount===1) {
        res.json({status:'success'});
    }
    else {
        res.json({status:'failure'});
    }
})

module.exports=router;
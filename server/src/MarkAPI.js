const express=require('express');
const router=express.Router();

const {con} =require('./database.js');


router.post('/add',(req,res)=>{
    const results=con.query('INSERT INTO marks values($1,$2,$3)',[req.body.sid,req.body.mark,req.body.cid])
    if(results.rowCount===1) {
        res.send("Marks Successfully added");
    }
    else {
        res.send("Mark adding failed!!");
    }
})

router.post('/update/:sid/:cid',async (req,res)=>{
    const results=await con.query('UPDATE marks SET mark=$1 WHERE student_id=$2 AND course_id=$3',[req.body.mark,req.params.sid,req.params.cid]);
    console.log(results);
    if(results.rowCount===1) {
        res.send("Marks Successfully UPDATED");
    }
    else {
        res.send("Mark adding failed!!");
    }
})

module.exports=router;
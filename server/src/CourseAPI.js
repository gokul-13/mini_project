const express=require('express');
const router=express.Router();

const {con} =require('./database.js');


router.post('/add',async (req,res)=>{
    try {
        console.log(req.body);
       const result=await con.query('INSERT INTO courses(id,name) values($1,$2)',[req.body.cid,req.body.cname]);
       if(result.rowCount===1) res.json({status:'success'});
       else {res.json({status:'failure'});}
    }
     catch (error) {
        console.log(error);
        res.json({status:'failure'});
    }
})

module.exports=router;
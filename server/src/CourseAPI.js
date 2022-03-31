const express=require('express');
const router=express.Router();

const {con} =require('./database.js');


router.post('/add',async (req,res)=>{
    try {
        console.log(req.body);
       const result=await con.query('INSERT INTO courses(name) values($1)',[req.body.cname]);
       if(result.rowCount===1) res.send("Marks added Succesfully");
       else {res.send("Error adding marks");}
    }
     catch (error) {
        console.log(error);
    }
})

module.exports=router;
const express=require('express');
const router=express.Router();

const {con} =require('./database.js');


router.post('/add',async (req,res)=>{
    try {
        console.log(req.body);
        con.query('INSERT INTO courses(id,name) values($1,$2)',[req.body.cid,req.body.cname]).then((result)=>{
            if(result.rowCount===1) res.json({status:'success'});
            else {res.json({status:'failure'});}
        }).catch((err)=>{
            console.log(err);
            res.json({status:'failure'});
        })
       
    }
     catch (error) {
        console.log(error);
        res.json({status:'failure'});
    }
})

router.get('/detail/:id',async (req,res)=>{
    try{
        const result=await con.query('SELECT * FROM courses WHERE id=$1',[req.params.id])
        res.json(result.rows);
    }
    catch(err) {
        console.log(err);
    }
})

router.get('/all',async (req,res)=>{
    try {
        const result=await con.query('SELECT * FROM courses');
        console.log(result.rows);
        res.json(result.rows);
    }catch(err) {
    }
})

module.exports=router;
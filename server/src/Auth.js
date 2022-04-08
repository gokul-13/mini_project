const express=require('express');
const router=express.Router();
const bycrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const {con} = require('./database');


function generateToken(id) {
    return jwt.sign({id},'harvey',{expiresIn:3600});
}

function checkUser(req,res,next) {
    const token=req.cookies.jwt;
    if(token) {
        jwt.verify(token,'harvey',(err,decodedToken)=>{
            if(err) res.json({status:'redirect'});
            next();
        })
    }
    else {
        res.json({status:'redirect'});
    }
}

router.get('/check',(req,res)=>{
    const token=req.cookies.jwt;
    if(token) {
        jwt.verify(token,'harvey',(err,decodedToken)=>{
            if(err) res.json({status:'redirect'});
            else {
                res.json({status:'success',role:req.cookies.role});
            }
        })
    }
    else {
        res.json({status:'redirect'});
    }
})


router.post('/signup',async (req,res)=>{
        const user=req.body;
        console.log(user);
        const salt=await bycrypt.genSalt();
        const password=await bycrypt.hash(user.password,salt);
        try {
        const results=await con.query('INSERT INTO signup values($1,$2,$3,$4,$5)',[user.id,user.name,user.email,password,user.role]);
        if(results.rowCount===1) {
            console.log("New User signed Up");
            res.json({status:'success'});
        }
        }catch(err) {
            res.json({status:'failure'});
        }
})

router.post('/login',async (req,res)=>{
    const user=req.body;
    console.log(user);
    res.header('Access-Control-Allow-Origin','http://localhost:8080');
    try {
    const results=await con.query('SELECT * FROM signup WHERE id=$1 AND role=$2',[user.id,user.role]);
    console.log(results.rows);
    if(results.rowCount===1) {
       const val= await bycrypt.compare(user.password,results.rows[0].password);
       if(val) {

           const token=generateToken(results.rows[0].id);
           res.cookie('jwt',token,{maxAge:1000*3600});
           res.cookie('role',user.role);
           res.json({status:'success',role:user.role});
        }
       else res.json({status:'failure',message:'Incorrect Passoword'})
        
    }
    else res.json({status:'failure',message:'User does not Exist'});
    }catch(err) {
        console.log(err);
        res.json({status:'failure',message:'Some error occured'});
    }
})

router.get('/logout',(req,res)=>{
    res.cookie('jwt','',{maxAge:1});
    res.cookie('role','',{maxAge:1});
    res.send('LogedOut')
})

module.exports.router=router;
module.exports.checkUser=checkUser;
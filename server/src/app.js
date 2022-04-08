
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan')
const cookieParser=require('cookie-parser');




let app=express();
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors({credentials:true,origin:true}));
app.use(cookieParser());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','http://localhost:8080');
    res.header('Access-Control-Allow-Methods','*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const studentApi=(require('./StudentAPI.js'));
const courseApi=(require('./CourseAPI.js'));
const markApi=require('./MarkAPI.js');
const obj=require('./Auth.js');
const auth=obj.router;
const checkUser=obj.checkUser;

app.use('/',auth);
app.use(checkUser);
app.use('/student',studentApi);
app.use('/course',courseApi);
app.use('/mark',markApi);



app.listen(8068);

const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan')




let app=express();
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

const studentApi=(require('./StudentAPI.js'));
const courseApi=(require('./CourseAPI.js'));
const markApi=require('./MarkAPI.js');

app.use('/student',studentApi);
app.use('/course',courseApi);
app.use('/mark',markApi);



app.listen(8068);
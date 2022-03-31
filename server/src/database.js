const Pool=require('pg').Pool;

const con=new Pool({
    user:'localhost',
    password:'',
    database:'test',
    user:'ecom-gokula.vp',
    port:5432
});

const Redis=require('redis');
const redisClient=Redis.createClient({
    host:'127.0.0.1',
    password:'',
    port:6379
});
redisClient.connect();

redisClient.on('connect', function() {
    console.log('Connected!');
  });

redisClient.on('error', err => {
    console.log('Error ' + err);
});


module.exports.con=con;
module.exports.redisClient=redisClient;
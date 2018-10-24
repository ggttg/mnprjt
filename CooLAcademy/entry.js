//importing modules
var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');

var app=express();
const route=require('./routes/route');
//connecting mongodb
mongoose.connect('mongodb://localhost:27017/CooLAcademy');
//on Connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database@27017');
    })
//error
mongoose.connection.on('error',(err)=>{
        if(err)
        {
    console.log('error in connection:'+err);
        }
    });
//port no
const port=3000;


//adding middleware
app.use(cors());

app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'../public')));

app.use('/api',route);

//testing server
app.get('/',(req,res)=>{
    res.send('Successfully');
});

app.listen(port,()=>{
    console.log('Server started at port:' +port);
}

);


const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const mongoose = require('mongoose');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));
mongoose.connect('mongodb://127.0.0.1:27017/quote').
then(()=>{
    console.log('DB CONNECTED');})
.catch((err)=>{
    console.log('error');
})
const quoteSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    quote:{
        type:String,
        trim:true,
    }
})

const Quote = mongoose.model('Quote',quoteSchema);
const quotes = [
    {
        name:'Ajay Tyagi',
        quote:'My Name is Ajay Tyagi'
    },{
        name:'Aman Verma',
        quote:'My name is Aman Verma'
    },{
        name:'Virat Kohli',
        quote:'Always play like a king'
    },{   
        name:'Aditya Singh',
        quote:'My name is Aditya Singh'
    }
];

let obj = Quote.find({name:'test'});
if(!obj)Quote.insertMany(quotes);

app.get('/',async (req,res)=>{
    let quotesD = await Quote.find({});
    res.render('index',{quotesD});
})


app.get('/quotes',(req,res)=>{
    res.render('quotes');
})
app.post('/',async (req,res)=>{
    let{name,quote} = req.body;
    await Quote.create({name,quote});
    res.redirect('/');
})
app.get('/Fullquote/:id',async (req,res)=>{
    let {id}=req.params;
    let found = await Quote.findById(id);
    res.render('Fullquote',{found})
})


app.listen(port,(err)=>{
    if(err){
        console.log("error !!");
        return;
    }
    console.log(`app running at ${port}`);
})
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const quotesRoutes = require('./routes/quotesRoutes');
const cors = require('cors');



mongoose.connect('mongodb://127.0.0.1:27017/Quotes')
    .then(() => console.log('Server Connected!'))
    .catch((err) => console.log(err));



app.use(cors({
  origin:['http://localhost:3000']
}));

app.use(express.json());


// seedDB();

app.get('/home', (req, res) => {
    res.status(200).json({msg:'Quotes server run successfully'});
})

app.use(quotesRoutes);



const port = process.env.PORT || 8000;

app.listen(port,()=>{
  console.log(`server started at port ${port}`);
});
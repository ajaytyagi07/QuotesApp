const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const quotesRoutes = require('./routes/quotesRoutes');
const cors = require('cors');
const dotenv = require("dotenv").config();


const mongourl = process.env.MONGO_URL;
const port = process.env.PORT;

mongoose
  .connect(mongourl)
  .then(() => console.log("Connection Open!"))
  .catch((err) => console.log(err));



app.use(cors({
  origin: ['http://localhost:3000']
}));

app.use(express.json());


// seedDB();

app.get('/home', (req, res) => {
  res.status(200).json({ msg: 'Quotes server run successfully' });
})

app.use(quotesRoutes);



app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
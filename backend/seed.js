const mongoose = require('mongoose');
const Quotes = require('./models/qoutes');


const DUMMY_QUOTES = [
    {
        author: 'Ajay Tyagi',
        text:'This is my first quotes app.'
    },
    {
        author: 'Virat Kohli',
        text:'The one and only King Virat Kohli'
    },
    {
        author: 'Praveen ',
        text:"Great people"
    },
    {
        author: 'Bapuji',
        text:"Nahane ja Nahane"
    },
]


async function seedDB() {
    await Quotes.insertMany(DUMMY_QUOTES);
    console.log('DB SEEDED!!!!');
}

module.exports = seedDB;


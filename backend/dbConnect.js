const mongoose = require('mongoose');

const dbconnect = mongoose.connect('mongodb://127.0.0.1:27017/tourism',(
    console.log('database successfully connected')
));

module.exports = dbconnect;
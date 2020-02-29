const mongoose = require('mongoose');

const {username, password} = require('../../resources/credentials');
const {url} = require('../../resources/database');

const connect = () => {
    mongoose.connect(`${url.replace('<username>', username).replace('<password>', password)}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if (err) console.log(err);
        else console.log('Connected to database')
    });
};

module.exports = {connect};

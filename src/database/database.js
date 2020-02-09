const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const resourceDir = '/Users/henrylarson/WebstormProjects/tarkov-rest/resources';

let {cluster, url} = JSON.parse(fs.readFileSync(path.join(resourceDir, 'database.json'), 'utf8'));

module.exports = (user, pass) => {
    mongoose.connect(`${url.replace('<username>', user).replace('<password>', pass)}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on('error', err => {
        console.log(err)
    });

    mongoose.connection.once('open', () => {
        console.log('Connected to database');
    })
};

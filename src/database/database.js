const mongoose = require('mongoose');

import {username, password} from '../../resources/credentials';
import {url} from '../../resources/database';

const connect = () => {
    mongoose.connect(`${url.replace('<username>', username).replace('<password>', password)}`, {
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

connect();

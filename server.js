const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(middleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use('/', (req, res) => {
    res.send('under construction...')
});
app.use('/home', (req, res) => {
    res.send('under construction...')
});
app.use('/ammo/types', (req, res) => {
    res.send('under construction...')
});
app.use('/ammo/pdw', (req, res) => {
    res.send('under construction...')
});
app.use('/ammo/pistol', (req, res) => {
    res.send('under construction...')
});
app.use('/ammo/rifle', (req, res) => {
    res.send('under construction...')
});
app.use('/ammo/shotgun', (req, res) => {
    res.send('under construction...')
});

app.listen(3000, console.log('Server started on port: 3000'));

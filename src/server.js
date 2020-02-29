const koa = new (require('koa'))();
const router = new (require('koa-router'))();
const json = require('koa-json');

const webpack = require('webpack');
const {devMiddleware, hotMiddleware} = require('koa-webpack-middleware');

const config = require('../webpack.config');
const compiler = webpack(config);

const {connect} = require('./database/database');
// const {username, password} = require('../resources/credentials');
const {findAmmoTypes, findPdwAmmo, findPistolAmmo, findRifleAmmo, findShotgunAmmo} = require('./database/accessor');

koa.use(devMiddleware(compiler, {publicPath: config.output.publicPath}));
koa.use(hotMiddleware(compiler, {}));
koa.use(router.routes());
koa.use(router.allowedMethods());
koa.use(json);

// router.get('/credentials', async (ctx) => {
//     return ctx.body = {
//         username: username,
//         password: password
//     }
// });

router.get('/ammo/types', async (ctx) => {
    return ctx.body = await findAmmoTypes();
});

router.get('/ammo/pdw', async (ctx) => {
    return ctx.body = await findPdwAmmo();
});

router.get('/ammo/pistol', async (ctx) => {
    return ctx.body = await findPistolAmmo();
});

router.get('/ammo/rifle', async (ctx) => {
    return ctx.body = await findRifleAmmo();
});

router.get('/ammo/shotgun', async (ctx) => {
    return ctx.body = await findShotgunAmmo();
});

koa.listen(3000, () => {
    console.log('Server started on port: 3000');
    connect();
});

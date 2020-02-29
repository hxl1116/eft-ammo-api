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
koa.use(json());

// router.get('/credentials', async (ctx) => {
//     return ctx.body = {
//         username: username,
//         password: password
//     }
// });

router
    .get('/test', async (ctx) => {
        ctx.body = {
            test: 'test'
        }
    })
    .get('/ammo/types', async (ctx) => {
        ctx.body = await findAmmoTypes();
    })
    .get('/ammo/pdw', async (ctx) => {
        ctx.body = await findPdwAmmo();
    })
    .get('/ammo/pistol', async (ctx) => {
        ctx.body = await findPistolAmmo();
    })
    .get('/ammo/rifle', async (ctx) => {
        ctx.body = await findRifleAmmo();
    })
    .get('/ammo/shotgun', async (ctx) => {
        ctx.body = await findShotgunAmmo();
    });

koa.listen(3000, () => {
    console.log('Server started on port: 3000');
    connect();
});

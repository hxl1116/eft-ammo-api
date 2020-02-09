const Koa = require('koa');
const KoaRouter = require('koa-router');
const render = require('koa-ejs');
const json = require('koa-json');
const mount = require('koa-mount');
const graphql = require('koa-graphql');
const path = require('path');

const connect = require('./database/database');
const schema = require('./graphql/schema');

const {AmmoTypes, PDWAmmo, PistolAmmo, RifleAmmo, ShotgunAmmo} = require('./database/schema');

const app = new Koa();
const router = new KoaRouter();

// JSON Prettier Middleware
app.use(json());

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());

app.use(mount('/graphql', graphql({
    schema: schema,
    graphiql: true
})));

render(app, {
    root: path.join(__dirname, '../views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
});

connect('SandwichEater', 'M@rbl3Rye20');

// Routes
router.get('/', index);
router.get('/home', home);
router.get('/ammo/types', ammoTypes);
router.get('/ammo/pdw', pdwAmmo);
router.get('/ammo/pistol', pistolAmmo);
router.get('/ammo/rifle', rifleAmmo);
router.get('/ammo/shotgun', shotgunAmmo);

// Functions
async function index(ctx) {
    return ctx.body = {
        greeting: 'Hello World!'
    };
}

async function home(ctx) {
    return ctx.body = 'Hello World!'
}

async function ammoTypes(ctx) {
    return AmmoTypes.find({}, (err, ammo) => {
        if (err) console.log(err);
        else ctx.body = ammo;
    })
}

async function pdwAmmo(ctx) {
    return PDWAmmo.find({}, (err, ammo) => {
        if (err) console.log(err);
        else ctx.body = ammo;
    })
}

async function pistolAmmo(ctx) {
    return PistolAmmo.find({}, (err, ammo) => {
        if (err) console.log(err);
        else ctx.body = ammo;
    })
}

async function rifleAmmo(ctx) {
    return RifleAmmo.find({}, (err, ammo) => {
        if (err) console.log(err);
        else ctx.body = ammo;
    })
}

async function shotgunAmmo(ctx) {
    return ShotgunAmmo.find({}, (err, ammo) => {
        if (err) console.log(err);
        else ctx.body = ammo;
    })
}

app.listen(3000, () => console.log('Server Started.'));

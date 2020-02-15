const app = new (require('koa'))();
const router = new (require('koa-router'))();
const json = require('koa-json');

const connect = require('./database/database');

const {AmmoTypes, PDWAmmo, PistolAmmo, RifleAmmo, ShotgunAmmo} = require('./database/schema');

// Connect to database
connect('SandwichEater', 'M@rbl3Rye20');

// JSON Prettier Middleware
app.use(json());

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());

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

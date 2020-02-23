const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartridgeGroupsSchema = new Schema({
    name: String,
    cartridges: [{
        name: String,
        uses: [{
            category: String,
            weapons: [String]
        }]
    }]
});

const cartridgeTypeSchema = new Schema({
    name: String,
    cartridges: [{
        name: String,
        dmg: String,
        pen: String,
        arm: String,
        acc: String,
        rec: String,
        frg: String,
        ric: String,
        vel: String,
        spc: String,
        sld: String
    }]
});

const AmmoTypes = mongoose.model('cartridge_types', cartridgeGroupsSchema);
const PDWAmmo = mongoose.model('pdw_cartridges', cartridgeTypeSchema);
const PistolAmmo = mongoose.model('pistol_cartridges', cartridgeTypeSchema);
const RifleAmmo = mongoose.model('rifle_cartridges', cartridgeTypeSchema);
const ShotgunAmmo = mongoose.model('shotgun_cartridges', cartridgeTypeSchema);

export default {AmmoTypes, PDWAmmo, PistolAmmo, RifleAmmo, ShotgunAmmo};

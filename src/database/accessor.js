const {AmmoTypes, PDWAmmo, PistolAmmo, RifleAmmo, ShotgunAmmo} = require('./schema');

const findAmmoTypes = () => {
    return AmmoTypes.find({}, (err, docs) => {
        return err ? err : docs
    })
};

const findPdwAmmo = () => {
    return PDWAmmo.find({}, (err, docs) => {
        return err ? err : docs
    })
};

const findPistolAmmo = () => {
    return PistolAmmo.find({}, (err, docs) => {
        return err ? err : docs
    })
};

const findRifleAmmo = () => {
    return RifleAmmo.find({}, (err, docs) => {
        return err ? err : docs
    })
};

const findShotgunAmmo = () => {
    return ShotgunAmmo.find({}, (err, docs) => {
        return err ? err : docs
    })
};

module.exports = {findAmmoTypes, findPdwAmmo, findPistolAmmo, findRifleAmmo, findShotgunAmmo};

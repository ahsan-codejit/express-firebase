const firebase = require('../../../db/firebase');
const create = require('./create')(firebase.db);
const update = require('./update')(firebase.db);
module.exports = {
    create,
    update
}
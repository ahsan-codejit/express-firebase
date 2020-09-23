const create = require('./create');
const update = require('./update');
module.exports = (db) => {
    return {
        create: create(db),
        update: update(db)
    }
}
const create = require('./create');
const update = require('./update');

module.exports = (Repository) => {
    return {
        create: create(Repository),
        update: update(Repository)
    }
}
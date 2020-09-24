let db = require('../../db');
let Repository = require('../../repositories/firebase/orders')(db);
let OrderModel = require('../../models/orders')(Repository);

const create = require('./create');
const update = require('./update');

module.exports = {
    create: create(OrderModel),
    update: update(OrderModel)
}
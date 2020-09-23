// Import express router
let Router = require('express').Router();
let orderValidator = require('../lib/middlewares/orderValidator');

const ordersController = require('../controllers/orders');
// Order routes
Router.route('/')
    .post(orderValidator, ordersController.create);

Router.route('/:id')
    .put(orderValidator, ordersController.update)


// Export API routes
module.exports = Router;
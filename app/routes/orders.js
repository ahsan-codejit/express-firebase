// Import express router
let Router = require('express').Router();
let orderValidator = require('../lib/middlewares/orderValidator');

// Order routes
Router.route('/')
    .post(orderValidator, (req, res) => {
        res.status(201).json({ message: 'post' })
    });

Router.route('/:id')
    .put(orderValidator, (req, res) => {
        res.status(201).json({ message: 'put' })
    })


// Export API routes
module.exports = Router;
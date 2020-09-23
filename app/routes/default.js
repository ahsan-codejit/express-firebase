let Router = require('express').Router();
// Set default API response
Router.get('/', function (req, res) {
    res.json({
        status: 'WORKING',
        message: 'Backend!'
    });
});

module.exports = Router;
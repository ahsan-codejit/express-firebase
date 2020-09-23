let defaultRoutes = require('./default');
let orderRoutes = require('./orders');
module.exports = async ({ app }) => {
    app.use('/', defaultRoutes);
    app.use('/orders', orderRoutes);
}
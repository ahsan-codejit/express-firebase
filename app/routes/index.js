let defaultRoutes = require('./default');
module.exports = async ({ app }) => {
    app.use('/', defaultRoutes);
}
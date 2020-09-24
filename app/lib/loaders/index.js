const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

let routes = require('../../routes');
let notFound = require('../middlewares/notFound');

module.exports.init = async ({ app }) => {
    // adding Helmet to enhance your API's security
    app.use(helmet());

    // Configure bodyparser to handle post requests
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // enabling CORS for all requests
    app.use(cors());

    // adding morgan to log HTTP requests
    app.use(morgan('combined'));

    // Use Api routes in the App
    routes({ app });

    //custom middlewares
    app.use(notFound);
}
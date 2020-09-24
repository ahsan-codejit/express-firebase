let db = null;
if (process.env.NODE_ENV === 'test') {
    db = require('./mockDB');
} else {
    db = require('./firebase').db;
}

module.exports = db;
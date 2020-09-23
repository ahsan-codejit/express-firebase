
const validator = require('../helpers/validate');
const FAILED = 'FAILED';
const order = (req, res, next) => {
    const validationRule = {
        "title": "required|string"
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(400)
                .send({
                    status: FAILED,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}

module.exports = order
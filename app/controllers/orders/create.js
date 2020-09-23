const FAILED = 'FAILED';
const SUCCESS = 'SUCCESS';
module.exports = (OrderModel) => {
    return (req, res) => {
        return OrderModel.create(req.body)
            .then(data => {
                res
                    .status(201)
                    .json({ order: data, status: SUCCESS });
            })
            .catch(err => {
                res
                    .status(412)
                    .json({
                        message: "Operation failed",
                        status: FAILED
                    });
            });
    }
}

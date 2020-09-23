
const FAILED = 'FAILED';
const SUCCESS = 'SUCCESS';

module.exports = (OrderModel) => {
    return (req, res) => {
        let orderId = req.params.id;
        return OrderModel
            .update(req.body, orderId)
            .then(data => {
                if (data.id) res.status(200).json({ order: data, status: SUCCESS });
                else res.status(200).json({ status: FAILED, message: data });
            })
            .catch(err => {
                res.status(412).json({
                    message: "Operation failed",
                    status: FAILED
                });
            });
    }
}

const COLLECTION_NAME = 'orders';
const SUCCESS_STATUS = "SUCCESS";
module.exports = (db) => {
    return (orderId, updatedOrder) => {
        if (!orderId) {
            throw new Error('Order id is required');
        }
        return db
            .collection(COLLECTION_NAME)
            .doc(orderId)
            .update(updatedOrder)
            .then(doc => {
                return Object.assign(updatedOrder, { id: orderId }, doc);
            })
            .catch(err => err);
    }
}

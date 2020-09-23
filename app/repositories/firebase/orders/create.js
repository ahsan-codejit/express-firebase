const COLLECTION_NAME = 'orders';
const SUCCESS_STATUS = "SUCCESS";

module.exports = (db) => {
    return (newOrder) => {
        return db
            .collection(COLLECTION_NAME)
            .add(newOrder)
            .then((doc) => {
                return Object.assign({ id: doc.id }, newOrder);
            })
            .catch(err => err);
    }
}
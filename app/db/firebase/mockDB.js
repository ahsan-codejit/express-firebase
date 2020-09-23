let db = {
    "orders": []
};

let add = async (collection, newOrder) => {
    newOrder.id = 1;
    await db[collection].push(newOrder);
    return newOrder;
}
let update = async (collection, orderId, order) => {
    db[collection][0] = await Object.assign(db[collection][0], order);
    return db[collection][0];
}
let doc = (collection, orderId) => {
    return {
        update: (order) => {
            return update(collection, orderId, order);
        }
    }
}
let collection = (collection) => {
    return {
        add: (newOrder) => {
            return add(collection, newOrder)
        },
        doc: (orderId) => {
            return doc(collection, orderId);
        }
    }
}
let mockDB = {
    get: () => {
        return db;
    },
    push: (collection, data) => {
        if (!Array.isArray(db[collection])) {
            db[collection] = [];
        }
        db[collection].push(data);
    },
    collection: (name) => {
        return collection(name);
    }
}

module.exports = mockDB;
const update = (Repository) => {
    return async ({ title, bookingDate = new Date() } = {}, orderId) => {
        if (!orderId) {
            throw new Error('Order id is required');
        }
        if (!title || typeof title !== 'string') {
            throw new Error('Order title is required');
        }
        let order = {
            title,
            bookingDate
        }
        return Repository
            .update(orderId, order);
    }
}

module.exports = (Repository) => {
    return update(Repository)
}
const create = (Repository) => {
    return async ({ title, address = "not mentioned", customer = "not mentioned" } = {}) => {
        if (!title || typeof title !== 'string') {
            throw new Error('Order title is required');
        }
        let newOrder = {
            title,
            bookingDate: new Date(),
            address,
            customer
        }
        return Repository
            .create(newOrder);
    }
}

module.exports = (Repository) => {
    return create(Repository)
}
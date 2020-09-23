const update = require('./update');
const db = require('../../../db/firebase/mockDB');
const SUCCESS_STATUS = 'SUCCESS';
const COLLECTION_NAME = 'orders';

db.push("orders", {
    id: 1,
    title: 'Test',
    bookingDate: new Date(),
    address: 'test',
    customer: ''
});

describe("Testing order update repository", () => {
    let updatedOrder = {
        title: 'Test2',
        bookingDate: new Date()
    }


    it('It should successfully update order', async () => {
        let res = await update(db)(1, updatedOrder);
        expect(res).toHaveProperty('id');
    });

    it('Order Title in collection should be changed to Test2', async () => {
        let dbStorage = await db.get();
        expect(dbStorage[COLLECTION_NAME][0].title).toBe('Test2');
    });
});
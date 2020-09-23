
const create = require('./create');
const SUCCESS_STATUS = 'SUCCESS';
const COLLECTION_NAME = 'orders';

const db = require('../../../db/firebase/mockDB');

describe("Testing order create repository", () => {
    let newOrder = {
        title: 'Test',
        bookingDate: new Date(),
        address: 'test'
    }

    it('It create new order and return status success', async () => {
        let res = await create(db)(newOrder);
        expect(res).toHaveProperty('id');
    });
    it('collection array length should be 1', async () => {
        let dbStorage = await db.get();
        expect(dbStorage[COLLECTION_NAME].length).toEqual(1);
    });
    it('Order title in collection should be Test', async () => {
        let dbStorage = await db.get();
        expect(dbStorage[COLLECTION_NAME][0].title).toBe('Test');
    });
});
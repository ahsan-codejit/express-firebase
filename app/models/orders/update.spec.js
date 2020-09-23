const db = require('../../db/firebase/mockDB');
db.push("orders", {
    id: 1,
    title: 'Test',
    bookingDate: new Date(),
    address: 'test',
    customer: ''
});

const Repository = require('../../repositories/firebase/orders')(db);
const update = require('./update')(Repository);

describe("Testing order model for updated order", () => {
    it("It should throw error", async () => {
        await expect(update({})).rejects.toThrow();
    });
    it("It returns an order object with title and bookingDate fields", async () => {
        let order = await update({
            title: "Test"
        }, 1);
        expect(order.bookingDate).not.toBe(undefined);
        expect(order.title).toMatch('Test');
    })
});
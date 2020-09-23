const db = require('../../db/firebase/mockDB');
const Repository = require('../../repositories/firebase/orders')(db);
const create = require('./create')(Repository);

describe("Testing order model for new order", () => {
    it("It returns a new order object with required fields", async () => {
        let newOrder = await create({
            title: "Test"
        });
        expect(newOrder.bookingDate).not.toBe(undefined);
        expect(newOrder.address).toMatch('not mentioned');
    });

    it("It should throw error", async () => {
        await expect(create({})).rejects.toThrow();
    });
});
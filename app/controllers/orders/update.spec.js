let db = require('../../db/firebase/mockDB');
db.push("orders", {
    id: 1,
    title: 'Test',
    bookingDate: new Date(),
    address: 'test',
    customer: ''
});
let Repository = require('../../repositories/firebase/orders')(db);
let OrderModel = require('../../models/orders')(Repository);

let update = require('./update');

const mockRequest = (data = {}) => {
    return data;
};
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
};
describe("Testing Order update controller", () => {
    test('it should be called and call status and json', async () => {
        const req = mockRequest({ body: { title: 'Test' }, params: { id: 1 } });
        const res = mockResponse();
        await update(OrderModel)(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalled();
    });

    test('it should get exception and call status with 412 and json with data', async () => {
        const req = mockRequest({ body: {}, params: {} });
        const res = mockResponse();
        await update(OrderModel)(req, res);
        expect(res.status).toHaveBeenCalledWith(412);
        expect(res.json).toHaveBeenCalled();
    });
});

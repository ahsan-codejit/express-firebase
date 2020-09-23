let db = require('../../db/firebase/mockDB');
let Repository = require('../../repositories/firebase/orders')(db);
let OrderModel = require('../../models/orders')(Repository);

let create = require('./create');

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

describe("Testing Order create controller", () => {
    test('it should be called and call status and json', async () => {
        const req = mockRequest({ body: { title: 'Test' } });
        const res = mockResponse();
        await create(OrderModel)(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalled();
    });

    test('it should get exception and call status with 412 and json with data', async () => {
        const req = mockRequest({ body: {} });
        const res = mockResponse();
        await create(OrderModel)(req, res);
        expect(res.status).toHaveBeenCalledWith(412);
        expect(res.json).toHaveBeenCalled();
    });
});


const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

const FAILED = 'FAILED';
const SUCCESS = 'SUCCESS';

describe('Testing endpoint POST /orders ', () => {
    it('should return 400 staus code with error message', async () => {
        let res = await request
            .post('/orders')
            .send({});
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('message');
    });

    it('it should succeeded and return status code 201', async () => {
        let res = await request
            .post('/orders')
            .send({
                title: "Test"
            });
        expect(res.status).toEqual(201);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('order');
        expect(res.body.order).toHaveProperty('id');
    }, 20000);
});

describe('Testing endpoint PUT /orders/:id ', () => {
    it('should return 400 staus code with error message', async () => {
        let res = await request
            .put('/orders/1')
            .send({});
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('message');
    });

    it('it should successfully update doc and return status code 200', async () => {
        let res = await request
            .put('/orders/1')
            .send({
                title: "Test"
            });
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('status');
        expect(res.body.status).toMatch(SUCCESS);
        expect(res.body).toHaveProperty('order');
    }, 20000);

    it('it should return status code 404', async () => {
        let res = await request
            .put('/orders/')
            .send({
                title: "Test"
            });
        expect(res.status).toEqual(404);
    }, 20000);
});
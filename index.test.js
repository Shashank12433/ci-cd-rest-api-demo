const request = require('supertest');
const app = require('./index');

describe('API Tests', () => {

    test('GET /health should return 200', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
    });

    test('POST /add should return sum', async () => {
        const response = await request(app)
            .post('/add')
            .send({ a: 5, b: 3 });
        expect(response.body.result).toBe(8);
    });

});

const request = require('supertest');
const app = require('./app');

describe('POST /fizzbuzz', () => {
    it('should return FizzBuzz results and division logs for valid input', async () => {
        const inputArray = [1, 3, 5, 15, 'A', 23];
        const expectedResponse = [
            { input: 1, output: '1', log: ['Divided 1 by 3', 'Divided 1 by 5'] },
            { input: 3, output: 'Fizz', log: ['Divided 3 by 3'] },
            { input: 5, output: 'Buzz', log: ['Divided 5 by 5'] },
            { input: 15, output: 'FizzBuzz', log: ['Divided 15 by 3', 'Divided 15 by 5'] },
            { input: 'A', output: 'Invalid Item' },
            { input: 23, output: '23', log: ['Divided 23 by 3', 'Divided 23 by 5'] }
        ];

        const response = await request(app)
            .post('/fizzbuzz')
            .send(inputArray)
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body).toEqual(expectedResponse);
    });

    it('should return an error for invalid input', async () => {
        const inputArray = 'not an array';

        const response = await request(app)
            .post('/fizzbuzz')
            .send(inputArray)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toEqual({ error: 'Input must be an array' });
    });
});

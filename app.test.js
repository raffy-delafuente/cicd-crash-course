const request = require('supertest');
const app = require('./app');

describe('App endpoints', () => {
  test('GET / returns welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello from image-based deployment');
  });

  test('GET /health returns ok status', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('POST /add returns sum of two numbers', async () => {
    const res = await request(app).post('/add').send({ a: 5, b: 3 });
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(8);
  });

  test('POST /add returns 400 when input is invalid', async () => {
    const res = await request(app).post('/add').send({ a: 'hello', b: 3 });
    expect(res.status).toBe(400);
  });
});
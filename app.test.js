const request = require('supertest');
const app = require('./app');

describe('simple GET tests', () => {

  it('should response to GET', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should handle /uppercase/ route', async () => {
    const response = await request(app).get('/uppercase/test');
    expect(response.text).toBe('TEST');
  });

  it('should handle all other routes', async () => {
    const response = await request(app).get('/howdy');
    expect(response.statusCode).toBe(404);
  })

})


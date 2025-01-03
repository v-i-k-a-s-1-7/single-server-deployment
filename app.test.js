const request = require('supertest');
const express = require('express');

// Import your app
const app = require('/home/ubuntu/app/single-server-deployment/index.js'); // Adjust the path if your app is in a different file.

describe('Express App', () => {
  test('GET / - should return the home page message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('<h1>Hello Sourav just testing my pipeline!</h1>');
  });

  test('GET /about - should return the about page message', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('<h1>Hello World from About Page!</h1>');
  });
});


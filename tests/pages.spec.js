import request from 'supertest';
import app from '../js/app.js';

//Define test name
test('home page shows list of movies', async () => {
  const response = await request(app) //send request
    .get('/')  //To what path
    .expect('Content-Type', 'text/html; charset=utf-8') //Expected return type
    .expect(200); //the expected response code

  expect(response.text.includes('Shawshank')).toBeTruthy(); //Expext this to be included in response
  expect(response.text.includes('Encanto')).toBeTruthy(); //Expect this to be in the response
});

//Define test name
test('Shawshank page returns Shawshank info', async () => {
  const response = await request(app) //Send request
    .get('/movies/3')  //To what path
    .expect('Content-Type', 'text/html; charset=utf-8')  //Expected return type
    .expect(200);

  expect(response.text.includes('Shawshank')).toBeTruthy();  //Expected to be in response
  expect(response.text.includes('dogs')).toBeFalsy();  //Expected not to be in response
});

//Define test name
test('movie not found', async () => {
    const response = await request(app) //Send request
      .get('/movies/99')  //To what path
      .expect('Content-Type', 'text/html; charset=utf-8')  //Expected return type
      .expect(404);
  
    expect(response.text.includes("We have been")).toBeTruthy();  //Expected to be in response
    expect(response.text.includes('Shawshank')).toBeFalsy();  //Expected not to be in response
  });
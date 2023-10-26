const request = require('supertest');
// we have to make this an object, because we need the app & the server
const { app, server } = require('../index');

// describe('Test the root PATH', () => {
//     test('It should respond with "Hello World!"', async () => {
//         const response = await request(app).get('/');
//         //we expect the response text to be "Hello World"
//         expect(response.text).toBe('Hello World!');
//         //we expect the response text to be "Hello World"
//         expect(response.statusCode).toBe(200);
//     });
// });

describe('List out all gifs', () => {
    test('It should list out all the gifs', async () => {
        const response = await request(app)
        .get('/gifs')
        console.log(response.body)
        expect(response.body.length).toBeDefined()
    });
    test('Get specific id of a gif', async () => {
        const response = await request(app)
        .get('/gifs/65398cf9e7d1a648124fb983')
        // console.log(response.body)
        expect(response.body._id).toEqual('65398cf9e7d1a648124fb983');
        expect(response.statusCode).toBe(200);
    });
    test('Add a new gif and return that gif', async () => {
        const response = await request(app)
        .post('/gifs')
        .send({ name: 'Beyonce Lemonade Gif', url: 'https://media.giphy.com/media/3o6ozBUuLfzTCngAFi/giphy.gif' });
        expect(response.body.url).toEqual('https://media.giphy.com/media/3o6ozBUuLfzTCngAFi/giphy.gif');
        expect(response.statusCode).toBe(200);
    });
    test('Update a new gif and return that gif', async () => {
        const response = await request(app)
        .put('/gifs/65398cf9e7d1a648124fb984')
        .send({ name: 'Beyonce Lemonade' });
        expect(response.body.name).toEqual('Beyonce Lemonade');
        expect(response.statusCode).toBe(200);
    });
    test('Delete a gif', async () => {
        const response = await request(app)
        .delete('/gifs/65398cf9e7d1a648124fb984')
        expect(response.body._id).toEqual('65398cf9e7d1a648124fb984');
        expect(response.statusCode).toBe(200);
    });
});
    
afterAll(done => {
    server.close()
    // process.exit()
    done()
})
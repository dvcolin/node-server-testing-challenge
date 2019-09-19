const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    describe('index route', () => {
        it('should return OK status code', () => {
            const expectedStatusCode = 200;

            let response;
            return request(server).get('/')
            .then(res => {
                response = res;

                expect(response.status).toEqual(expectedStatusCode);
            })
        });

        it('should return a JSON object', () => {
            const expectedResponseType = 'application/json';

            let response;
            return request(server).get('/')
            .then(res => {
                response = res;

                expect(response.type).toEqual(expectedResponseType);
            })
        })
    })
})
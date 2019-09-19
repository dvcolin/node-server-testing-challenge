const request = require('supertest');
const server = require('./server.js');

const db = require('../data/db-config.js');
const Tracks = require('./models/tracks-model.js');

describe('server.js', () => {

    beforeEach(async () => {
        // this function executes and clears out the table before each test
        await db('tracks').truncate();
      });

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
    });

    describe('tracks route', () => {
        it('should be able to post tracks', async () => {
            await Tracks.insert({ "track_name": "Tripolar Dub", "track_artist": "Akeos" })
            await Tracks.insert({ "track_name": "Wonton Bass", "track_artist": "Aweminus" })

            const tracks = await db('tracks');

            expect(tracks).toHaveLength(2);
        })
    })
})
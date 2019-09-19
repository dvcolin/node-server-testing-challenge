const db = require('../../data/db-config.js');
const Tracks = require('./tracks-model.js');

describe('tracks route', () => {
    describe('insert()', () => {
        beforeEach(async () => {
            // this function executes and clears out the table before each test
            await db('tracks').truncate();
          });

        it('should be able to post tracks', async () => {
            await Tracks.insert({ "track_name": "Tripolar Dub", "track_artist": "Akeos" })
            await Tracks.insert({ "track_name": "Wonton Bass", "track_artist": "Aweminus" })

            const tracks = await db('tracks');

            expect(tracks).toHaveLength(2);
        });

        it('should be able to post a new track', async () => {
            const track = await Tracks.insert({ track_name: 'Bad Sectors (Metahumper VIP)', track_artist: 'Mighty Duck & KC Dubz' })

            expect(track.track_name).toEqual('Bad Sectors (Metahumper VIP)')

        })
    });

    describe('remove()', () => {
        beforeEach(async () => {
            // this function executes and clears out the table before each test
            await db('tracks').truncate();
          });

        it('should be able to delete a track', async () => {
            await Tracks.insert({ "track_name": "Tripolar Dub", "track_artist": "Akeos" })
            await Tracks.insert({ "track_name": "Wonton Bass", "track_artist": "Aweminus" })

            let tracks = await db('tracks');
            expect(tracks).toHaveLength(2);

            await Tracks.remove(1)
            tracks = await db('tracks');
            expect(tracks).toHaveLength(1);
        
        });

        it('should delete the track with the specified id', async () => {
            await Tracks.insert({ "track_name": "Tripolar Dub", "track_artist": "Akeos" })
            await Tracks.insert({ "track_name": "Wonton Bass", "track_artist": "Aweminus" })

            let tracks = await db('tracks');
            expect(tracks).toHaveLength(2);

            await Tracks.remove(2)

            const response = await Tracks.getById(2)

            expect(response).toEqual({ error: 'Track already deleted!' });
        })
    })
});
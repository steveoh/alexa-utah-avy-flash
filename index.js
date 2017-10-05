const ApiBuilder = require('claudia-api-builder');
module.exports = api = new ApiBuilder();

const advisories = {
    saltlake: {
        uid: "urn:uuid:1335c695-cfb8-4ebb-abbd-80da344efa6b",
        updateDate: new Date().toISOString(),
        titleText: "Salt Lake Advisory for October 4th",
        mainText: "It's deeep today and safe. Shred with joy!",
        redirectionUrl: "https://developer.amazon.com/public/community/blog"
    },
    ogden: {
        uid: "urn:uuid:1335c695-cfb8-4ebb-abbd-80da344efa6b",
        updateDate: new Date().toISOString(),
        titleText: "Ogden Advisory for October 3rd",
        mainText: "It's deeep today and safe. Shred with joy!",
        redirectionUrl: "https://developer.amazon.com/public/community/blog"
    }
};

api.get('/rss', () => advisories.saltlake, {
    success: {
        contentType: 'application/json'
    },
    error: {
        code: 500
    }
});

api.get('/rss/saltlake', () => advisories.saltlake, {
    success: {
        contentType: 'application/json'
    },
    error: {
        code: 500
    }
});

api.get('/rss/ogden', () => advisories.ogden, {
    success: {
        contentType: 'application/json'
    },
    error: {
        code: 500
    }
});

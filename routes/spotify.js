const express = require('express');
const router = express.Router();
const SpotifyWebApi = require('spotify-web-api-node')



var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

// Retrieve an access token

spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));

router.get('/tracks/:search', (req, res, next) => {


  spotifyApi.searchTracks(req.params.search, { limit: 5 })
    .then(function (data) {
      console.log('Search by "Love"', data.body);

      const allIds = data.body.tracks.items.map(i => "https://open.spotify.com/embed/track/" + i.id)

      res.json(allIds)

    }, function (err) {
      console.error(err);
    });


});






module.exports = router;

const express = require('express');
const router = express.Router()

router.get('/artist-search', function(req, res, next) {
    spotifyApi
  .searchArtists(foundArtist)
  .then(data => {
    console.log('The received data from the API: ', data.body);
    // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
    res.render('artist-search.hbs', foundArtist);
  })
  .catch(err => console.log('The error while searching artists occurred: ', err));
    
  });
  
  module.exports = router;
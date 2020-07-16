const User = require('../models/user-model');

const LocalStrategy = require('passport-local').Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;


const bcrypt = require('bcryptjs'); // !!!
const passport = require('passport');

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

// makes req.user available for every request
passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession, (err, userDocument) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, userDocument);
  });
});

// LocalStrategy -> logging in user via email / password (not signup !)
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, next) => {
  User.findOne({ email }, (err, foundUser) => {
    if (err) {
      next(err);
      return;
    }

    if (!foundUser) {
      next(null, false, { message: 'Incorrect email.' });
      return;
    }

    if (!bcrypt.compareSync(password, foundUser.password)) {
      next(null, false, { message: 'Incorrect password.' });
      return;
    }

    next(null, foundUser);
  });
}));


// Sign up with spotify

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: process.env.BASE_URL + '/api/auth/spotify/callback'
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      console.log("profile", profile)
      User.findOrCreate({ spotifyId: profile.id, spotifyEmail: profile.email, display_name: profile.displayName /*images: profile.images*/ }, function (err, user) {
        return done(err, user);
      });
    }
  )
);


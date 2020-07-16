const express    = require('express');
const authRoutes = express.Router();

const passport   = require('passport');
const bcrypt     = require('bcryptjs');
//const findOrCreate = require('mongoose-findorcreate')


// require the user model !!!!
const User       = require('../models/user-model');

// Sign-up with email 

authRoutes.post('/signup', (req, res, next) => {
  console.log("i am here")
    const email = req.body.email;
    const password = req.body.password;
  
    if (!email || !password) {
      res.status(400).json({ message: 'Provide email and password' });
      return;
    }

    // if(password.length < 8){
    //     res.status(400).json({ message: 'Please make your password at least 8 characters long for security reasons.' });
    //     return;
    // }
  
    User.findOne({ email }, (err, foundUser) => {

        if(err){
            res.status(500).json({message: "Email check went bad."});
            return;
        }

        if (foundUser) {
            res.status(400).json({ message: 'This email address is already taken.' });
            return;
        }
  
        const salt     = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);
  
        const aNewUser = new User({
            email: email,
            password: hashPass
        });
        

        aNewUser.save(err => {
            if (err) {
                res.status(400).json({ message: 'Saving user to database went wrong.' });
                return;
            }
            
            // Automatically log in user after sign up
            // .login() here is actually a predefined passport method
            req.login(aNewUser, (err) => {

                if (err) {
                    res.status(500).json({ message: 'Login after signup went bad.' });
                    return;
                }
            
                // Send the user's information to the frontend
                // We can use also: res.status(200).json(req.user);
                res.status(200).json(aNewUser);
            });
        });
    });
});

//Log in with email

authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
      if (err) {
          res.status(500).json({ message: 'Something went wrong authenticating user' });
          return;
      }
  
      if (!theUser) {
          // "failureDetails" contains the error messages
          // from our logic in "LocalStrategy" { message: '...' }.
          res.status(401).json(failureDetails);
          return;
      }

      // save user in session
      req.login(theUser, (err) => {
          if (err) {
              res.status(500).json({ message: 'Session save went bad.' });
              return;
          }

          // We are now logged in (that's why we can also send req.user)
          res.status(200).json(theUser);
      });
  })(req, res, next);
});

// GET "/checkuser" allows the client to check to see:
// (a) if we are logged-in
// (b) the details of the logged-in user (if any)
authRoutes.get("/checkuser", (req, res, next) => {
  if (req.user) {
    res.json({ userDoc: req.user });
  } else {
    res.json({ userDoc: null });
  }
});

// Log out

authRoutes.post('/logout', (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
});


// Sign in with Spotify 

authRoutes.get('/auth/spotify', passport.authenticate('spotify'), function(req, res) {
  // The request will be redirected to spotify for authentication, so this
  // function will not be called.
});

// authRoutes.get(
//   '/auth/spotify/callback',
//   passport.authenticate('spotify', { failureRedirect: '/login' }, ),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   }
// );

authRoutes.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private']
  }),
  function(req, res) {
    // The request will be redirected to spotify for authentication, so this
    // function will not be called.
        res.redirect(process.env.BASE_URL);

  }
);





module.exports = authRoutes;
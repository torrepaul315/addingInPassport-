var express = require('express');
var router = express.Router();
//passport related code!
var passport = require('passport');
var facebookStrategy = require('passport-facebook').Strategy;
var LinkedInStrategy = require('passport-linkedin').Strategy;

passport.serializeUser(function(user, cb) {
  console.log(user);
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  console.log(obj);
  cb(null, obj);
});

router.use(passport.initialize());
router.use(passport.session());





//setting the scene....'auto-handling' the state param
passport.use(new LinkedInStrategy({
  consumerKey: '78t05pvtjrr6xg',
  consumerSec,
  callbackURL: "http://localhost:5280/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_basicprofile'],
  state: true
}, function(token, tokenSecret, profile, done) {
    User.findOrCreate({ linkedinId: profile.id }, function (err, user) {
        return done(err, user);
      });
}));

//start the auth process!
router.get('/linkedin',
  passport.authenticate('linkedin', { scope: ['r_basicprofile', 'r_emailaddress'] }));

//   function(req, res){
//     console.log(req, res);
//     // The request will be redirected to LinkedIn for authentication, so this
//     // function will not be called.
// });

//callback route
router.get('/linkedin/callback',  passport.authenticate('linkedin', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/successfulExample');
});





passport.use(new facebookStrategy({
  // facebookAuth.AppId
  clientID: "118436758713765",
  //facebookAuth.clientSecret
  clientSecret: "0c631e6f4ed0d0630c5e33ad05c402f4",
  callbackURL:"http://localhost:5280/auth/facebook/callback",
  profileURL: 'https://graph.facebook.com/v2.9/me',
   authorizationURL: 'https://www.facebook.com/v2.9/dialog/oauth',
   tokenURL: 'https://graph.facebook.com/v2.9/oauth/access_token'

},

function(accessToken, refreshToken, profile, cb) {
    console.log(accessToken, refreshToken, profile, cb);

    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return cb(null, profile);
  }));







//facebook routes


router.get('/facebook',

  passport.authenticate('facebook'));


     router.get('/facebook/callback',
       passport.authenticate('facebook', { failureRedirect: '/' }),
       function(req, res) {
         // Successful authentication, redirect home.
         res.redirect('/successExample.html');
       });


module.exports = router;

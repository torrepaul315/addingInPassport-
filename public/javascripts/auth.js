//
// these don't go here! requires only mean anything on the backend!  var facebookStrategy = require('passport-facebook').Strategy

// var passport = require('passport');



// this could all be pushed to another file!

// module.exports = {
//    googleAuth: {
//      'clientID':'895962107065-0du9jvr9dnv6nrlv9s54usgls5do7572.apps.googleusercontent.com',
//
//      'clientSecret':'oN4bHjHZHlOHFfwF0Dj4iNID',
//
//      'callbackURL':'https://torresblog.herokuapp.com/successExample.html'
//    },
//    facebookAuth: {
//      'AppId':'118436758713765',
//      'clientSecret':'0c631e6f4ed0d0630c5e33ad05c402f4',
//      'callbackURL':'https://torresblog.herokuapp.com/successExample.html'
//    }
//  }
//facebookAuth
$('.f-login').on('click', function (e){
    e.preventDefault();
    console.log('button working');
//make post request here to the socAuth route
    $.ajax({
      method:"GET",
      url: "/auth/facebook",
    }).then((response) =>{
      console.log('promise resolved');
      console.log(response)
    })
    .catch((err) => {
      console.log('promise rejected');
        console.log(err)
    })



//this should be in auth js!
    // passport.use(new FacebookStrategy({
    //   // facebookAuth.AppId
    //   clientID: "118436758713765",
    //   //facebookAuth.clientSecret
    //   clientSecret: "0c631e6f4ed0d0630c5e33ad05c402f4",
    //   callbackURL: "http://localhost:3000/auth/facebook/callback"
    // }))
    // function(accessToken, refreshToken, profile, cb) {
    //   console.log('making progress!')
});










$('.g-login').on('click', function (e) {
  e.preventDefault();
  console.log('button works');
  $.ajax({
      method: 'GET',
      url: '/blogpost/' + returner,
    })
    .then((blogArray) => {
      // renderData(blogArray);
      var email = blogArray[0]['user_email']
      $.ajax({
        method: 'GET',
        url: '/user/' + email,
      })
      .then((authorInfo) => {
        // console.log(authorInfo);
        // renderAuthor(authorInfo)
        renderData(blogArray, authorInfo);
        ;
      })
    })
    .catch((err) => {
      console.log(err)
    })
// return returner;
});


/* notes so far on auth!
need to have
for social auth- registration on their site! ie, you have to declare that you are will be reaching out to verify ids(why? think about it...you are asking THEM to check on THEIR data for someone's ID!)
in that process, not only do you generate a client ID and a client secret- why wouldn't you need a 'key' of sorts each time you reach out for a verification

additionally, you establish what URL that request is coming from (your website's root address) as well as what page a client would be redirected to upon successful completion
? question- in the case of a login for Artwork network, wouldn't this be a unique id or somesuch thing tacked onto a query string after the address?
*/

const passport = require('passport');
const passportSell = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const GoogleStrategySell = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
    
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/login",
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    console.log(profile)
    return done(null, profile);
  }
));


// passportSell.use(new GoogleStrategySell({
//   clientID:process.env.GOOGLE_CLIENT_ID_SELL,
//   clientSecret:process.env.GOOGLE_CLIENT_SECRET_SELL,
//   callbackURL: "http://localhost:3000/auth/google-seller/login-seller",
//   passReqToCallback:true
// },
// function(request, accessToken, refreshToken, profile, done) {
//   console.log(profile)
//   return done(null, profile);
// }
// ));
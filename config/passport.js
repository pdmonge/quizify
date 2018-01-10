const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {User} = require ('../models');
// Serialize
// What we want to save into memory to track user
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// Deserialize
// How we take the saved value in memory to get full user object
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user.toJSON());
  })
  .catch(err => {
  	done(err, null);
  });
});
// Strategy
// How we handle requests coming in to determine newly logged in users.

passport.use('local', new LocalStrategy(
	{
		usernameField: 'email',
		passwordField: 'password'
	},
  function(email, password, done) {
    User.findOne({where: { email }})
    	.then(user => {
	      console.log('user', user);
	      if (!user) {
	        return done(null, false, { message: 'Incorrect email or password.' });
	      }
	      if (!user.validPassword(password)) {
	        return done(null, false, { message: 'Incorrect email or password.' });
	      }
	      return done(null, user);
	    })
    	.catch(err => {
    		if (err) { 
		      	console.log('err', err);
		      	return done(err);
		    }
    	});
  }
));
const express = require( 'express' );
const router = express.Router();

const passport = require( '../auth/passport' );
const register = require( './users/register' );

const Account = require( '../models/user' );

/* GET users listing. */
router.get('/login', (request, response, next) => {
  response.render('login');
});

router.get('/register', (request, response, next) => {
  response.render('register', { });
});

router.post( '/register', (request, response, next) => {
  const { email, password } = request.body;

  Account.register( new Account({ email }), password, register( response ));
})

module.exports = router;

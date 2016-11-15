const passport = require( '../../auth/passport' );

const register = response => ( error, account ) => {
  if( error ) {
    return response.render( 'register', { account } )
  } else {
    passport.authenticate( 'local', ( request, response, () => {
      response.redirect( '/users/profile' )
    }))
  }
}

module.exports = register;

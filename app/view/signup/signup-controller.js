'use strict';

require('./signup.scss');

module.exports = ['$log', SignupController];
function SignupController($log) {
  $log.debug('signupController');
  this.title = 'Sign Up'
};

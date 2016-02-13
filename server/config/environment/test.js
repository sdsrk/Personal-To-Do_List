'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/todo-test'
  },
    seedDB: true,
  /*,
  google: {
    clientID: '1079870768138-6k4321h57tcqu6f75rick59s1i13u0b0.apps.googleusercontent.com',
    clientSecret: 'l5LxI5k2rc-7PIYq-jcD68Ka',
    //callbackURL: 'http://hrmsplus.accolite.com/auth/google/callback'
    callbackURL: 'http://localhost:9000/auth/google/callback'
  }*/
};
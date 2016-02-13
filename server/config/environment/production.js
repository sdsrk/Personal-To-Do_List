'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/todo'
  }/*,
  google: {
    clientID: '177085260127-viq2qum7am03d5qn5pgst53a44dv6l0b.apps.googleusercontent.com',
    clientSecret: '1SzR0QUZXHDphk6Un3Su8bNw',
    //callbackURL: 'http://hrmsplus.accolite.com/auth/google/callback'
    callbackURL: 'http://localhost:9000/auth/google/callback'
  }*/
};
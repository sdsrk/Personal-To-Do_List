 /**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var request = require('request');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/todoItemss', require('./api/todoItems'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  var cron = require('cron');

  var nodemailer = require('nodemailer');
  var smtpTransport = require('nodemailer-smtp-transport');

  var transporter = nodemailer.createTransport(
    smtpTransport('smtps://mail.job0%40gmail.com:08181sc020@smtp.gmail.com')
);




var cronJob = cron.job('*/30 * * * * *', function(){
   
    request('http://localhost:9000/api/todoItemss/notify', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) 
     }
     var x = body[0]._id
     console.log('notify gggggggggggg',response.body) 
     
        /*  transporter.sendMail({
    from: 'mail.job0@gmail.com',
    to: 'shardul315@gmail.com',
    subject: 'Event in next 15 Mins!',
    text: 'localhost:9000/api/todoItemss/update/body[0]._id'+x,
    //html:"<a href=''>localhost:9000/api/todoItemss/update/"+body[0]._id+"/0/1</a>"
}, function(error, response) {
   if (error) {
        console.log(error);
   } else {
        console.log('Message sent');
   }
});*/
})
    console.info('cron job completed in routes');
}); 
 //cronJob.start(); 
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};

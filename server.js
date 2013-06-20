var express = require('express'),
  app = express(),
  modRewrite = require('connect-modrewrite');

// enable express strict routing, see http://expressjs.com/api.html#app-settings
// for more info
app.enable('strict routing');

/**
 * express app configuration
 */
app.configure(function () {
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static('dist'));
  app.use(modRewrite([
    '!\\.html|\\.js|\\.css|\\swf$ /index.html'
  ]));

  // strip slashes
  app.use(function (req, res, next) {
    if (req.url.substr(-1) === '/' && req.url.length > 1) {
      res.redirect(301, req.url.slice(0, -1));
    } else {
      next();
    }
  });
  // use the router
  app.use(app.router);
  // use the static router

  // if nothing matched, send 404
  /*
   app.use(function (req, res) {
   res.status(404).sendfile('build/404.html');
   });
   */

  app.use(express.errorHandler({
    dumpExceptions: false,
    showStack: false
  }));

});

/**
 * Server configuration
 */
var port = process.env.PORT || 9000;
app.listen(port);
console.log('Starting a server on port: ' + port);

/**
 * express app router
 */
app.get('/', function (req, res, next) {
  res.sendfile('dist/index.html');
});


// final route, if nothing else matched, this will match docs
app.get('*', function (req, res, next) {
  res.sendfile('dist/index.html');
});

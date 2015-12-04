(function() {
  'use strict';

  var express = require('express'),
    app = express(),
    favicon = require('serve-favicon');

  app.use(favicon(__dirname + '/public/favicon.png'));
  app.use(express.static(__dirname + "/public"));

  var port = process.env.PORT || 10002;
  app.listen(port);
  console.log("Server running on " + port);
})();

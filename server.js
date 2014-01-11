var express = require('express')
  , app = express()
  , port = process.env.port || 3005;

app.use(express.static(__dirname));

app.listen(port, function () {
  console.log('Listening on port %d', port);
});

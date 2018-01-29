const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

var server = app.listen(process.env.PORT || 8080, () => {
    var port = server.address().port;
    console.log('Server started on' + port);
});
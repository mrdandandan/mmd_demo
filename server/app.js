let routes = require('./routes');

let express = require('express'),
    bodyParser = require('body-parser'),
    cors    = require('express-cors');

let app  = express(),
    port = 8001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({
    allowedOrigins: [
        'localhost:*'
    ]
}));

routes(app);

app.listen(port);

console.log(`listening on port ${port}`);
let express = require('express');
let app = express();
const cors = require('cors');
const router = require('./routes');

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use('/api', router);


module.exports = app;
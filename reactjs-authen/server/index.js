const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./api/route');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/quiz_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => {
        console.log('Connected to Mongoose');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors({}));
app.use(bodyParser.json());

routes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port);
